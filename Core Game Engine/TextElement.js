"use strict";
var TextElement = function(parameters) {
	RectElement.call(this, parameters);
	this.text = ifValue(parameters.text, "");
	this.font = ifValue(parameters.font, "bold 16px Arial");
	this.colour = ifValue(parameters.colour, "black");
	this.verticalAlign = ifValue(parameters.verticalAlign, TextElement.VERTICAL_ALIGN_TOP);
	this.horizontalAlign = ifValue(parameters.horizontalAlign, TextElement.HORIZONTAL_ALIGN_LEFT);
}

TextElement.VERTICAL_ALIGN_TOP = "top";
TextElement.VERTICAL_ALIGN_MIDDLE = "middle";
TextElement.VERTICAL_ALIGN_BOTTOM = "bottom";
TextElement.HORIZONTAL_ALIGN_LEFT = "left";
TextElement.HORIZONTAL_ALIGN_CENTRE = "centre";
TextElement.HORIZONTAL_ALIGN_RIGHT = "right";

TextElement.prototype = new RectElement({});

TextElement.prototype.constructor = TextElement;

TextElement.prototype.draw = function(context) {
	context.fillStyle = this.colour;
	context.font = this.font;
	context.textBaseline = this.verticalAlign;
	var fillTextX = this.x;
	var fillTextY = this.y;
	var textWidth = context.measureText(this.text).width;
	if (this.horizontalAlign == TextElement.HORIZONTAL_ALIGN_CENTRE) {
		fillTextX = this.x + (this.width - textWidth) / 2;
	} else if (this.horizontalAlign == TextElement.HORIZONTAL_ALIGN_RIGHT) {
		fillTextX = this.x + this.width - textWidth;
	};
	if (this.verticalAlign == TextElement.VERTICAL_ALIGN_MIDDLE) {
		fillTextY = this.y + this.height / 2;
	} else if (this.verticalAlign == TextElement.VERTICAL_ALIGN_BOTTOM) {
		fillTextY = this.y + this.height;
	};
	context.fillText(this.text, fillTextX, fillTextY);
};