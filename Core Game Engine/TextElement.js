"use strict";
var TextElement = function(parameters) {
	RectElement.call(this, parameters);
	this.text = ifSpecified(parameters.text, "");
	this.font = ifSpecified(parameters.font, "bold 16px Arial");
	this.colour = ifSpecified(parameters.colour, "black");
	this.verticalAlign = ifSpecified(parameters.verticalAlign, TextElement.VERTICAL_ALIGN_TOP);
	this.horizontalAlign = ifSpecified(parameters.horizontalAlign, TextElement.HORIZONTAL_ALIGN_LEFT);
}

TextElement.VERTICAL_ALIGN_TOP = "top";
TextElement.VERTICAL_ALIGN_MIDDLE = "middle";
TextElement.VERTICAL_ALIGN_BOTTOM = "bottom";
TextElement.VALID_VERTICAL_ALIGN_VALUES = new Set([TextElement.VERTICAL_ALIGN_TOP, TextElement.VERTICAL_ALIGN_MIDDLE, TextElement.VERTICAL_ALIGN_BOTTOM]);
TextElement.HORIZONTAL_ALIGN_LEFT = "left";
TextElement.HORIZONTAL_ALIGN_CENTRE = "centre";
TextElement.HORIZONTAL_ALIGN_RIGHT = "right";
TextElement.VALID_HORIZONTAL_ALIGN_VALUES = new Set([TextElement.HORIZONTAL_ALIGN_LEFT, TextElement.HORIZONTAL_ALIGN_CENTRE, TextElement.HORIZONTAL_ALIGN_RIGHT]);

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

TextElement.prototype.validate = function() {
	RectElement.prototype.validate.call(this);
	validateIsString(this.text, this, "text");
	validateIsString(this.font, this, "font");
	validateIsString(this.colour, this, "colour");
	validateIsString(this.verticalAlign, this, "verticalAlign");
	validateIsString(this.horizontalAlign, this, "horizontalAlign");
	validateIsIn(this.verticalAlign, TextElement.VALID_VERTICAL_ALIGN_VALUES, this, "verticalAlign");
	validateIsIn(this.horizontalAlign, TextElement.VALID_HORIZONTAL_ALIGN_VALUES, this, "horizontalAlign");
}