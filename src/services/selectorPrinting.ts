/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as nodes from '../parser/cssNodes';
import { MarkedString, Location } from 'vscode-languageserver-types';
import { Scanner } from '../parser/cssScanner';

import * as nls from 'vscode-nls';
const localize = nls.loadMessageBundle();

export class Element {

	public parent: Element;
	public children: Element[];
	public attributes: { name: string, value: string; }[];

	public findAttribute(name: string): string {
		if (this.attributes) {
			for (const attribute of this.attributes) {
				if (attribute.name === name) {
					return attribute.value;
				}
			}
		}
		return null;
	}

	public addChild(child: Element): void {
		if (child instanceof Element) {
			(<Element>child).parent = this;
		}
		if (!this.children) {
			this.children = [];
		}
		this.children.push(child);
	}

	public append(text: string) {
		if (this.attributes) {
			const last = this.attributes[this.attributes.length - 1];
			last.value = last.value + text;
		}
	}

	public prepend(text: string) {
		if (this.attributes) {
			const first = this.attributes[0];
			first.value = text + first.value;
		}
	}

	public findRoot(): Element {
		let curr: Element = this;
		while (curr.parent && !(curr.parent instanceof RootElement)) {
			curr = curr.parent;
		}
		return curr;
	}

	public removeChild(child: Element): boolean {
		if (this.children) {
			const index = this.children.indexOf(child);
			if (index !== -1) {
				this.children.splice(index, 1);
				return true;
			}
		}
		return false;
	}

	public addAttr(name: string, value: string): void {
		if (!this.attributes) {
			this.attributes = [];
		}
		for (const attribute of this.attributes) {
			if (attribute.name === name) {
				attribute.value += ' ' + value;
				return;
			}
		}
		this.attributes.push({ name, value });
	}

	public clone(cloneChildren: boolean = true): Element {
		const elem = new Element();
		if (this.attributes) {
			elem.attributes = [];
			for (const attribute of this.attributes) {
				elem.addAttr(attribute.name, attribute.value);
			}
		}
		if (cloneChildren && this.children) {
			elem.children = [];
			for (let index = 0; index < this.children.length; index++) {
				elem.addChild(this.children[index].clone());
			}
		}
		return elem;
	}

	public cloneWithParent(): Element {
		const clone = this.clone(false);
		if (this.parent && !(this.parent instanceof RootElement)) {
			const parentClone = this.parent.cloneWithParent();
			parentClone.addChild(clone);
		}
		return clone;
	}
}

export class RootElement extends Element {

}

export class LabelElement extends Element {

	constructor(label: string) {
		super();
		this.addAttr('name', label);
	}
}

class MarkedStringPrinter {

	private result: string[];

	constructor(public quote: string) {
		// empty
	}

	public print(element: Element): MarkedString[] {
		this.result = [];
		if (element instanceof RootElement) {
			this.doPrint(element.children, 0);
		} else {
			this.doPrint([element], 0);
		}

		const value = this.result.join('\n');
		return [{ language: 'html', value }];
	}

	private doPrint(elements: Element[], indent: number) {
		for (const element of elements) {
			this.doPrintElement(element, indent);
			if (element.children) {
				this.doPrint(element.children, indent + 1);
			}
		}
	}

	private writeLine(level: number, content: string) {
		const indent = new Array(level + 1).join('  ');
		this.result.push(indent + content);
	}

	private doPrintElement(element: Element, indent: number) {
		const name = element.findAttribute('name');

		// special case: a simple label
		if (element instanceof LabelElement || name === '\u2026') {
			this.writeLine(indent, name);
			return;
		}

		// the real deal
		const content = ['<'];

		// element name
		if (name) {
			content.push(name);
		} else {
			content.push('element');
		}

		// attributes
		if (element.attributes) {
			for (const attr of element.attributes) {
				if (attr.name !== 'name') {
					content.push(' ');
					content.push(attr.name);
					const value = attr.value;
					if (value) {
						content.push('=');
						content.push(quotes.ensure(value, this.quote));
					}
				}
			}
		}
		content.push('>');

		this.writeLine(indent, content.join(''));
	}
}


namespace quotes {

	export function ensure(value: string, which: string): string {
		return which + remove(value) + which;
	}

	export function remove(value: string): string {
		const match = value.match(/^['"](.*)["']$/);
		if (match) {
			return match[1];
		}
		return value;
	}
}

export function toElement(node: nodes.SimpleSelector, parentElement?: Element): Element {

	let result = new Element();
	for (const child of node.getChildren()) {
		switch (child.type) {
			case nodes.NodeType.SelectorCombinator:
				if (parentElement) {
					const segments = child.getText().split('&');
					if (segments.length === 1) {
						// should not happen
						result.addAttr('name', segments[0]);
						break;
					}
					result = parentElement.cloneWithParent();
					if (segments[0]) {
						const root = result.findRoot();
						root.prepend(segments[0]);
					}
					for (let i = 1; i < segments.length; i++) {
						if (i > 1) {
							const clone = parentElement.cloneWithParent();
							result.addChild(clone.findRoot());
							result = clone;
						}
						result.append(segments[i]);
					}
				}
				break;
			case nodes.NodeType.SelectorPlaceholder:
				if (child.getText() === '@at-root') {
					return result;
				}
			// fall through
			case nodes.NodeType.ElementNameSelector:
				const text = child.getText();
				result.addAttr('name', text === '*' ? 'element' : unescape(text));
				break;
			case nodes.NodeType.ClassSelector:
				result.addAttr('class', unescape(child.getText().substring(1)));
				break;
			case nodes.NodeType.IdentifierSelector:
				result.addAttr('id', unescape(child.getText().substring(1)));
				break;
			case nodes.NodeType.MixinDeclaration:
				result.addAttr('class', (<nodes.MixinDeclaration>child).getName());
				break;
			case nodes.NodeType.PseudoSelector:
				result.addAttr(unescape(child.getText()), '');
				break;
			case nodes.NodeType.AttributeSelector:
				const selector = <nodes.AttributeSelector>child;
				const identifuer = selector.getIdentifier();
				if (identifuer) {
					const expression = selector.getValue();
					const operator = selector.getOperator();
					let value: string;
					if (expression) {
						switch (unescape(operator.getText())) {
							case '|=':
								// excatly or followed by -words
								value = `${quotes.remove(unescape(expression.getText()))}-\u2026`;
								break;
							case '^=':
								// prefix
								value = `${quotes.remove(unescape(expression.getText()))}\u2026`;
								break;
							case '$=':
								// suffix
								value = `\u2026${quotes.remove(unescape(expression.getText()))}`;
								break;
							case '~=':
								// one of a list of words
								value = ` \u2026 ${quotes.remove(unescape(expression.getText()))} \u2026 `;
								break;
							case '*=':
								// substring
								value = `\u2026${quotes.remove(unescape(expression.getText()))}\u2026`;
								break;
							default:
								value = quotes.remove(unescape(expression.getText()));
								break;
						}
					}
					result.addAttr(unescape(identifuer.getText()), value);
				}
				break;
		}
	}
	return result;
}

function unescape(content: string) {
	const scanner = new Scanner();
	scanner.setSource(content);
	const token = scanner.scanUnquotedString();
	if (token) {
		return token.text;
	}
	return content;
}

/**
 * @private
 * @see https://www.w3.org/TR/selectors-3/#specificity
*/
class Specificity {
	constructor(
		/** Count of identifiers (e.g., `#app`) */
		public id: number = 0,

		/** Count of attributes (`[type="number"]`), classes (`.container-fluid`), and pseudo-classes (`:hover`) */
		public attr: number = 0,

		/** Count of tag names (`div`), and pseudo-elements (`::before`) */
		public tag: number = 0,
	) {}

	update(selectorNode: nodes.SelectorAbstract) {
		switch (selectorNode.type) {
			case nodes.NodeType.IdentifierSelector:
				this.id++;
				break;

			case nodes.NodeType.ClassSelector:
			case nodes.NodeType.AttributeSelector:
				this.attr++;
				break;

			case nodes.NodeType.ElementNameSelector:
				if (selectorNode.getText() !== "*") {
					this.tag++; // tag name, but not the universal selector ("*")
				}

				break;

			case nodes.NodeType.PseudoSelector:
				const text = selectorNode.getText();

				if (text.match(/^::|:(?:before|after|selection|first-(?:letter|line))/)) {
					this.tag++; // pseudo-element
				} else if (!text.match(/^:not/i)) {
					this.attr++; // pseudo-class, but not the negation pseudo-class (":not()")
				}

				break;
		}

		selectorNode.getChildren().forEach(this.update, this);
	}

	toArray() {
		return Array.from(this) as [ number, number, number ];
	}

	*[Symbol.iterator]() {
		yield this.id;
		yield this.attr;
		yield this.tag;
	}
}

function selectorToSpecificityMarkedString(node: nodes.SelectorAbstract): MarkedString {
	const specificity = new Specificity();
	node.getChildren().forEach(specificity.update, specificity);
	return localize('specificity', "[Selector Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity): ({0}, {1}, {2})", ...specificity.toArray());
}

export function selectorToMarkedString(node: nodes.Selector): MarkedString[] {
	const root = selectorToElement(node);
	const markedStrings = new MarkedStringPrinter('"').print(root);
	markedStrings.push(selectorToSpecificityMarkedString(node));
	return markedStrings;
}

export function simpleSelectorToMarkedString(node: nodes.SimpleSelector): MarkedString[] {
	const element = toElement(node);
	const markedStrings = new MarkedStringPrinter('"').print(element);
	markedStrings.push(selectorToSpecificityMarkedString(node));
	return markedStrings;
}

class SelectorElementBuilder {

	private prev: nodes.Node;
	private element: Element;

	public constructor(element: Element) {
		this.prev = null;
		this.element = element;
	}

	public processSelector(selector: nodes.Selector): void {
		let parentElement: Element = null;

		if (!(this.element instanceof RootElement)) {
			if (selector.getChildren().some((c) => c.hasChildren() && c.getChild(0).type === nodes.NodeType.SelectorCombinator)) {
				const curr = this.element.findRoot();
				if (curr.parent instanceof RootElement) {
					parentElement = this.element;

					this.element = curr.parent;
					this.element.removeChild(curr);
					this.prev = null;
				}
			}
		}

		for (const selectorChild of selector.getChildren()) {

			if (selectorChild instanceof nodes.SimpleSelector) {
				if (this.prev instanceof nodes.SimpleSelector) {
					const labelElement = new LabelElement('\u2026');
					this.element.addChild(labelElement);
					this.element = labelElement;
				} else if (this.prev && (this.prev.matches('+') || this.prev.matches('~')) && this.element.parent) {
					this.element = <Element>this.element.parent;
				}

				if (this.prev && this.prev.matches('~')) {
					this.element.addChild(toElement(<nodes.SimpleSelector>selectorChild));
					this.element.addChild(new LabelElement('\u22EE'));
				}

				const thisElement = toElement(<nodes.SimpleSelector>selectorChild, parentElement);
				const root = thisElement.findRoot();

				this.element.addChild(root);
				this.element = thisElement;
			}
			if (selectorChild instanceof nodes.SimpleSelector ||
				selectorChild.type === nodes.NodeType.SelectorCombinatorParent ||
				selectorChild.type === nodes.NodeType.SelectorCombinatorShadowPiercingDescendant ||
				selectorChild.type === nodes.NodeType.SelectorCombinatorSibling ||
				selectorChild.type === nodes.NodeType.SelectorCombinatorAllSiblings) {

				this.prev = selectorChild;
			}
		}
	}
}

function isNewSelectorContext(node: nodes.Node): boolean {
	switch (node.type) {
		case nodes.NodeType.MixinDeclaration:
		case nodes.NodeType.Stylesheet:
			return true;
	}
	return false;
}

export function selectorToElement(node: nodes.Selector): Element {
	if (node.matches('@at-root')) {
		return null;
	}
	const root: Element = new RootElement();
	const parentRuleSets: nodes.RuleSet[] = [];

	if (node.getParent() instanceof nodes.RuleSet) {
		let parent = node.getParent().getParent(); // parent of the selector's ruleset
		while (parent && !isNewSelectorContext(parent)) {
			if (parent instanceof nodes.RuleSet) {
				if (parent.getSelectors().matches('@at-root')) {
					break;
				}
				parentRuleSets.push(<nodes.RuleSet>parent);
			}
			parent = parent.getParent();
		}
	}

	const builder = new SelectorElementBuilder(root);

	for (let i = parentRuleSets.length - 1; i >= 0; i--) {
		const selector = <nodes.Selector>parentRuleSets[i].getSelectors().getChild(0);
		if (selector) {
			builder.processSelector(selector);
		}
	}

	builder.processSelector(node);
	return root;
}
