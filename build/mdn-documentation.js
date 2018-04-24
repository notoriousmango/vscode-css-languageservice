/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Creative Commons Attribution-ShareAlike 2.5 Generic License.
 *--------------------------------------------------------------------------------------------*/

/**
 * This file is mainly compiled from https://developer.mozilla.org/en-US/docs/Web/CSS with some additions from the following sources
 *  - https://msdn.microsoft.com/en-us/library/dn433242(v=vs.85).aspx
 *  - https://www.w3.org/,
 */

module.exports = {
  '-ms-ime-align': `Aligns the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active.`,
  '-moz-binding': `The -moz-binding CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.`,
  '-moz-context-properties': `If you reference an SVG image in a webpage (such as with the <img> element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the -moz-context-properties property, and the image needs to opt in to using those properties by using values such as the context-fill value.\n\nThis feature is available since Firefox 55, but is only currently supported with SVG images loaded via chrome:// or resource:// URLs. To experiment with the feature in SVG on the Web it is necessary to set the svg.context-properties.content.enabled pref to true.`,
  '-moz-float-edge': `The non-standard -moz-float-edge CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.`,
  '-moz-force-broken-image-icon': `The -moz-force-broken-image-icon extended CSS property can be used to force the broken image icon to be shown even when a broken image has an alt attribute.`,
  '-moz-image-region': `For certain XUL elements and pseudo-elements that use an image from the list-style-image property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.`,
  '-moz-orient': `The -moz-orient CSS property specifies the orientation of the element to which it's applied.`,
  '-moz-outline-radius': `In Mozilla applications like Firefox, the -moz-outline-radius CSS property can be used to give an element's outline rounded corners.`,
  '-moz-outline-radius-bottomleft': `In Mozilla applications, the -moz-outline-radius-bottomleft CSS property can be used to round the bottom-left corner of an element's outline.`,
  '-moz-outline-radius-bottomright': `In Mozilla applications, the -moz-outline-radius-bottomright CSS property can be used to round the bottom-right corner of an element's outline.`,
  '-moz-outline-radius-topleft': `In Mozilla applications, the -moz-outline-radius-topleft CSS property can be used to round the top-left corner of an element's outline.`,
  '-moz-outline-radius-topright': `In Mozilla applications, the -moz-outline-radius-topright CSS property can be used to round the top-right corner of an element's outline.`,
  '-moz-stack-sizing': `-moz-stack-sizing is an extended CSS property. Normally, a stack will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.`,
  '-moz-text-blink': `The -moz-text-blink non-standard Mozilla CSS extension specifies the blink mode.`,
  '-moz-user-input': `In Mozilla applications, -moz-user-input determines if an element will accept user input.`,
  '-moz-user-modify': `The -moz-user-modify property has no effect. It was originally planned to determine whether or not the content of an element can be edited by a user.`,
  '-moz-window-dragging': `The -moz-window-dragging CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.`,
  '-moz-window-shadow': `The -moz-window-shadow CSS property specifies whether a window will have a shadow. It only works on Mac OS X.`,
  '-webkit-border-before': `The -webkit-border-before CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.`,
  '-webkit-border-before-color': `The -webkit-border-before-color CSS property sets the color of the individual logical block start border in a single place in the style sheet.`,
  '-webkit-border-before-style': `The -webkit-border-before-style CSS property sets the style of the individual logical block start border in a single place in the style sheet.`,
  '-webkit-border-before-width': `The -webkit-border-before-width CSS property sets the width of the individual logical block start border in a single place in the style sheet.`,
  '-webkit-mask': `The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.`,
  '-webkit-mask-attachment': `If a -webkit-mask-image is specified, -webkit-mask-attachment determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.`,
  '-webkit-mask-composite': `The -webkit-mask-composite property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the -webkit-mask-image property.`,
  '-webkit-mask-position': `The mask-position CSS property sets the initial position, relative to the mask position layer defined by mask-origin, for each defined mask image.`,
  '-webkit-mask-position-x': `The -webkit-mask-position-x CSS property sets the initial horizontal position of a mask image.`,
  '-webkit-mask-position-y': `The -webkit-mask-position-y CSS property sets the initial vertical position of a mask image.`,
  '-webkit-mask-repeat-x': `The -webkit-mask-repeat-x property specifies whether and how a mask image is repeated (tiled) horizontally.`,
  '-webkit-mask-repeat-y': `The -webkit-mask-repeat-y property specifies whether and how a mask image is repeated (tiled) vertically.`,
  'appearance': `Changes the appearance of buttons and other controls to resemble native controls.`,
  'azimuth': `In combination with elevation, the azimuth CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.`,
  'backdrop-filter': `The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.`,
  'box-align': `The box-align CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.`,
  'box-direction': `The box-direction CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).`,
  'box-flex': `The -moz-box-flex and -webkit-box-flex CSS properties specify how a -moz-box or -webkit-box grows to fill the box that contains it, in the direction of the containing box's layout.`,
  'box-flex-group': `The box-flex-group CSS property assigns the flexbox's child elements to a flex group.`,
  'box-lines': `The box-lines CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).`,
  'box-ordinal-group': `The box-ordinal-group CSS property assigns the flexbox's child elements to an ordinal group.`,
  'box-orient': `The box-orient CSS property specifies whether an element lays out its contents horizontally or vertically.`,
  'box-pack': `The -moz-box-pack and -webkit-box-pack CSS properties specify how a -moz-box or -webkit-box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.`,
  'color-adjust': `The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images in browsers based on the WebKit engine.`,
  'font-variation-settings': `The font-variation-settings CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.`,
  'gap': `The gap CSS property is a shorthand property for row-gap and column-gap specifying the gutters between grid rows and columns.`,
  'row-gap': `The row-gap CSS property specifies the gutter between grid rows.`,
  'hanging-punctuation': `The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.`,
  'image-resolution': `The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element. It affects both content images (e.g. replaced elements and generated content) and decorative images (such as background-image). The intrinsic resolution of an image is used to determine the image’s intrinsic dimensions.`,
  'initial-letter': `The initial-letter CSS property specifies styling for dropped, raised, and sunken initial letters.`,
  'initial-letter-align': `The initial-letter-align CSS property specifies the alignment of initial letters within a paragraph.`,
  'line-height-step': `The line-height-step CSS property defines the step units for line box heights. When the step unit is positive, line box heights are rounded up to the closest multiple of the unit. Negative values are invalid.`,
  'mask': `The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.`,
  'mask-border': `The mask-border CSS property lets you create a mask along the edge of an element's border.\n\nThis property is a shorthand for mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, mask-border-repeat, and mask-border-mode. As with all shorthand properties, any omitted sub-values will be set to their initial value.`,
  'mask-border-mode': `The mask-border-mode CSS property specifies the blending mode used in a mask border.`,
  'mask-border-outset': `The mask-border-outset CSS property specifies the distance by which an element's mask border is set out from its border box.`,
  'mask-border-repeat': `The mask-border-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.`,
  'mask-border-slice': `The mask-border-slice CSS property divides the image specified by mask-border-source into regions. These regions are used to form the components of an element's mask border.`,
  'mask-border-source': `The mask-border-source CSS property specifies the source image used to create an element's mask border.\n\nThe mask-border-slice property is used to divide the source image into regions, which are then dynamically applied to the final mask border.`,
  'mask-border-width': `The mask-border-width CSS property specifies the width of an element's mask border.`,
  'mask-clip': `The mask-clip CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.`,
  'mask-composite': `The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.`,
  'offset': `The offset CSS property is a shorthand property for animating an element along a defined path.`,
  'offset-anchor': `Defines an anchor point of the box positioned along the path. The anchor point specifies the point of the box which is to be considered as the point that is moved along the path.`,
  'offset-distance': `The offset-distance CSS property specifies a position along an offset-path.`,
  'offset-path': `The offset-path CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the offset-distance property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for offset-distance and an initial direction which specifies the rotation of the object to the initial position.\n\nIn this specification, a direction (or rotation) of 0 degrees is equivalent to the direction of the positive x-axis in the object’s local coordinate system. In other words, a rotation of 0 degree points to the right side of the UA if the object and its ancestors have no transformation applied.`,
  'offset-position': `Specifies the initial position of the offset path. If position is specified with static, offset-position would be ignored.`,
  'offset-rotate': `The offset-rotate CSS property defines the direction of the element while positioning along the offset path.`,
  'overflow-clip-box': `The overflow-clip-box CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the overflow-clip-box-inline and overflow-clip-box-block properties.`,
  'overscroll-behavior': `The overscroll-behavior CSS property is shorthand for the overscroll-behavior-x and overscroll-behavior-y properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.`,
  'overscroll-behavior-x': `The overscroll-behavior-x CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.`,
  'overscroll-behavior-y': `The overscroll-behavior-y CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.`,
  'place-content': `The place-content CSS shorthand property sets both the align-content and justify-content properties.`,
  'rotate': `The rotate CSS property allows you to specify rotation transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.`,
  'ruby-merge': `This property controls how ruby annotation boxes should be rendered when there are more than one in a ruby container box: whether each pair should be kept separate, the annotations should be collapsed and rendered as a group, or the separation should be determined based on the space available.`,
  'scale': `The scale CSS property allows you to specify scale transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.`,
  'scroll-snap-type-x': `The scroll-snap-type-x CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.\n\nSpecifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.`,
  'scroll-snap-type-y': `The scroll-snap-type-y CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.\n\nSpecifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.`,
  'text-combine-upright': `The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\nThis is used to produce an effect that is known as tate-chū-yoko (縦中横) in Japanese, or as 直書橫向 in Chinese.`,
  'text-decoration-skip': `The text-decoration-skip CSS property specifies what parts of the element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.`,
  'text-decoration-skip-ink': `The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.`,
  'text-emphasis': `The text-emphasis CSS property is a shorthand property for setting text-emphasis-style and text-emphasis-color in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.`,
  'text-emphasis-color': `The text-emphasis-color CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the text-emphasis shorthand.`,
  'text-emphasis-position': `The text-emphasis-position CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.`,
  'text-emphasis-style': `The text-emphasis-style CSS property defines the type of emphasis used. It can also be set, and reset, using the text-emphasis shorthand.`,
  'text-size-adjust': `The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.`,
  'transform-box': `The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.`,
  'translate': `The translate CSS property allows you to specify translation transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.`,
  'speak-as': `The speak-as descriptor specifies how a counter symbol constructed with a given @counter-style will be represented in the spoken form. For example, an author can specify a counter symbol to be either spoken as its numerical value or just represented with an audio cue.`,
  'font-display': `The font-display descriptor determines how a font face is displayed based on whether and when it is downloaded and ready to use.`,
  'font-variation-settings': `The font-variation-settings CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.`,
  'bleed': `The bleed CSS at-rule descriptor, used with the @page at-rule, specifies the extent of the page bleed area outside the page box. This property only has effect if crop marks are enabled using the marks property.`,
  'marks': `The marks CSS at-rule descriptor, used with the @page at-rule, adds crop and/or cross marks to the presentation of the document. Crop marks indicate where the page should be cut. Cross marks are used to align sheets.`,
  'max-zoom': `The max-zoom CSS descriptor sets the maximum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom in any further than this, whether automatically or at the user's request.\n\nA zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out.`,
  'min-zoom': `The min-zoom CSS descriptor sets the minimum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom out any further than this, whether automatically or at the user's request.\n\nA zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out.`,
  'orientation': `The orientation CSS @media media feature can be used to apply styles based on the orientation of the viewport (or the page box, for paged media).`,
  'user-zoom': `The user-zoom CSS descriptor controls whether or not the user can change the zoom factor of a document defined by @viewport.`
}
