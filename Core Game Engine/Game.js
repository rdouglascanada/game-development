"use strict";
function Game(parameters) {
	this.canvas = parameters.canvas;
	this.width = parameters.width;
	this.height = parameters.height;
	this.backgroundColour = parameters.backgroundColour;
	this.timeout = parameters.timeout;
	this.stateElement = parameters.stateElement;
};

Game.prototype.update = function() {
	this.canvas.width = this.width;
	this.canvas.height = this.height;
	this.canvas.style.backgroundColor = this.backgroundColour;
	if (this.stateElement) {this.stateElement.update();}
};

Game.prototype.draw = function() {
	if (this.stateElement) {
		var context = this.canvas.getContext("2d");
		this.stateElement.draw(context);
	}
};

Game.prototype.mainLoopIteration = function() {
	this.update();
   this.draw();
};

Game.prototype.mainLoop = function() {
	var game = this;
	var iterationWithTimeout = function() {
		game.mainLoopIteration();
		window.setTimeout(iterationWithTimeout, game.timeout);
	}
	iterationWithTimeout();
};