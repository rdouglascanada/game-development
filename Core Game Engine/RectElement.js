"use strict";
function RectElement(parameters) {
	Element.call(this, parameters);
	this.x = parameters.x;
	this.y = parameters.y;
	this.width = parameters.width;
	this.height = parameters.height;
	if (!parameters.x) {this.x = 0;}
	if (!parameters.y) {this.y = 0;}
}

RectElement.prototype = new Element({});

RectElement.prototype.constructor = RectElement;