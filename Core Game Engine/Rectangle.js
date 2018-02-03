"use strict";
function Rectangle(parameters) {
	Element.call(this, parameters);
	this.x = parameters.x;
	this.y = parameters.y;
	this.width = parameters.width;
	this.height = parameters.height;
	this.colour = parameters.colour;
	if (!parameters.x) {this.x = 0;}
	if (!parameters.y) {this.y = 0;}
	if (!parameters.colour) {this.colour = "black";}
}

Rectangle.prototype = new Element();

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.draw = function(context) {
	if (!this.width || !this.height) {throw "Cannot draw Rectangle without width and height.";}
	context.fillStyle = this.colour;
	context.fillRect(this.x, this.y, this.width, this.height);
};