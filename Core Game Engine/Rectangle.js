"use strict";
var Rectangle = function(parameters) {
	RectElement.call(this, parameters);
	this.colour = ifSpecified(parameters.colour, "black");
}

Rectangle.prototype = new RectElement({});

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.draw = function(context) {
	context.fillStyle = this.colour;
	context.fillRect(this.x, this.y, this.width, this.height);
};

Rectangle.prototype.validate = function() {
	RectElement.prototype.validate.call(this);
	validateIsString(this.colour, this, "colour");
}