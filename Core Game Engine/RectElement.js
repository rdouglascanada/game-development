"use strict";
var RectElement = function(parameters) {
	Element.call(this, parameters);
	this.x = ifSpecified(parameters.x, 0);
	this.y = ifSpecified(parameters.y, 0);
	this.width = ifSpecified(parameters.width, 0);
	this.height = ifSpecified(parameters.height, 0);
}

RectElement.prototype = new Element({});

RectElement.prototype.constructor = RectElement;

RectElement.prototype.validate = function() {
	validateIsInt(this.x, this, "x");
	validateIsInt(this.y, this, "y");
	validateIsNonnegativeInt(this.width, this, "width");
	validateIsNonnegativeInt(this.height, this, "height");
}