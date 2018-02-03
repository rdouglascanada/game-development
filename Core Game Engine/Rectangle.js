"use strict";
function Rectangle(parameters) {
	if (!parameters.width || !parameters.height) {throw "Cannot create Rectangle without width and height.";}
	this.x = parameters.x;
	this.y = parameters.y;
	this.width = parameters.width;
	this.height = parameters.height;
	this.colour = parameters.colour;
	if (!parameters.x) {this.x = 0;}
	if (!parameters.y) {this.y = 0;}
	if (!parameters.colour) {this.colour = "black";}
}

Rectangle.prototype.draw = function(context) {
	context.fillStyle = this.colour;
	context.fillRect(this.x, this.y, this.width, this.height);
};

Rectangle.prototype.update = function() {};