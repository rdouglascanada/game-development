"use strict";
var Rectangle = function(parameters) {
	RectElement.call(this, parameters);
	this.colour = parameters.colour;
	if (!parameters.colour) {this.colour = "black";}
}

Rectangle.prototype = new RectElement({});

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.draw = function(context) {
	if (!this.width || !this.height) {throw "Cannot draw Rectangle without width and height.";}
	context.fillStyle = this.colour;
	context.fillRect(this.x, this.y, this.width, this.height);
};