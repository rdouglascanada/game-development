"use strict";
var Game = function(parameters) {
	this.canvas = parameters.canvas;
	this.width = parameters.width;
	this.height = parameters.height;
	this.backgroundColour = ifSpecified(parameters.backgroundColour, "black");
	this.timeout = parameters.timeout;
	this.validationMode = ifSpecified(parameters.validationMode, true);
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

Game.prototype.validate = function() {
	validateIsSpecified(this.canvas, this, "canvas");
	validateIsNonnegativeInt(this.width, this, "width");
	validateIsNonnegativeInt(this.height, this, "height");
	validateIsNonnegative(this.timeout, this, "timeout");
	validateIsString(this.backgroundColour, this, "background colour");
	if (this.stateElement) {this.stateElement.validate();}
}

Game.prototype.mainLoopIteration = function() {
	if (this.validationMode) {this.validate();}
	this.update();
	if (this.validationMode) {this.validate();}
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