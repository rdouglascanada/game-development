"use strict";
var Game = {
	canvas:undefined,
	width:undefined, height:undefined,
	backgroundColour:undefined, timeout:undefined
};

Game.createInstance = function(values) {
	console.log("Game.createInstance");
	var instance = Object.create(Game);
	Object.assign(instance, values);
	return instance;
};

Game.draw = function() {
	console.log("Game.draw");
};

Game.update = function() {
	console.log("Game.update");
	this.canvas.width = this.width;
	this.canvas.height = this.height;
	this.canvas.style.backgroundColor = this.backgroundColour;
};