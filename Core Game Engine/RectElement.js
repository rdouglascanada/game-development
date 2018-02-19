"use strict";
var RectElement = function(parameters) {
	Element.call(this, parameters);
	this.x = ifValue(parameters.x, 0);
	this.y = ifValue(parameters.y, 0);
	this.width = parameters.width;
	this.height = parameters.height;
}

RectElement.prototype = new Element({});

RectElement.prototype.constructor = RectElement;