"use strict";
var Shape = function(parameters) {
	RectElement.call(this, parameters);
	this.points = parameters.points;
	this.colour = parameters.colour;
	if (!parameters.colour) {this.colour = "black";}
}

Shape.prototype = new RectElement({});

Shape.prototype.constructor = Shape;

Shape.prototype.draw = function(context) {
	if (!this.width || !this.height) {throw "Cannot draw Shape without width and height.";}
	if (!this.points || this.points.length < 3) {throw "Cannot draw Shape without at least 3 points.";}

	context.fillStyle = this.colour;
	context.strokeStyle = this.colour;
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
	context.stroke();
};

Shape.createTriangle = function(x, y, width, height, colour) {
	return new Shape({x:x, y:y, width:width, height:height, colour:colour, points:[[0, 1], [0.5, 0], [1, 1]]});
}

Shape.createCross = function(x, y, width, height, colour) {
	return new Shape({x:x, y:y, width:width, height:height, colour:colour,
		points:[
			[0, 0.1], [0.1, 0], [0.5, 0.4], [0.9, 0], [1, 0.1],
			[0.6, 0.5], [1, 0.9], [0.9, 1], [0.5, 0.6],
			[0.1, 1], [0, 0.9], [0.4, 0.5]
		]
	});
}