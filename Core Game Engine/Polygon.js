"use strict";
var Polygon = function(parameters) {
	RectElement.call(this, parameters);
	this.points = parameters.points;
	this.colour = ifValue(parameters.colour, "black");
}

Polygon.prototype = new RectElement({});

Polygon.prototype.constructor = Polygon;

Polygon.prototype.draw = function(context) {
	if (!this.width || !this.height) {throw "Cannot draw Polygon without width and height.";}
	if (!this.points || this.points.length < 3) {throw "Cannot draw Polygon without at least 3 points.";}

	context.fillStyle = this.colour;
	var firstPoint = this.points[0];
	var firstX = this.x + this.width * firstPoint[0];
	var firstY = this.y + this.height * firstPoint[1];
	context.beginPath();
	context.moveTo(firstX, firstY);
	for (var i = 1; i < this.points.length; i++) {
		var point = this.points[i];
		var pointX = this.x + this.width * point[0];
		var pointY = this.y + this.height * point[1];
		context.lineTo(pointX, pointY);
	};
	context.lineTo(firstX, firstY);
	context.closePath();
	context.fill();
};