"use strict";
function Game(values) {
	console.log("Game.new");
	this.canvas = values.canvas;
	this.width = values.width;
	this.height = values.height;
	this.backgroundColour = values.backgroundColour;
	this.timeout = values.timeout;
};

Game.prototype.update = function() {
	console.log("Game.update");
	this.canvas.width = this.width;
	this.canvas.height = this.height;
	this.canvas.style.backgroundColor = this.backgroundColour;
};

Game.prototype.draw = function() {
	console.log("Game.draw");
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