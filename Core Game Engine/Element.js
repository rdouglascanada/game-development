"use strict";
var Element = function(parameters) {};

Element.prototype.draw = function(context) {};

Element.prototype.update = function() {};

Element.prototype.update = function() {};

Element.prototype.handleKeyPress = function(evnt) {
	if (this.keyboardHandler) {this.keyboardHandler.handleKeyPress(evnt);}
}

Element.prototype.handleKeyUp = function(evnt) {
	if (this.keyboardHandler) {this.keyboardHandler.handleKeyUp(evnt);}
}

Element.prototype.handleKeyDown = function(evnt) {
	if (this.keyboardHandler) {this.keyboardHandler.handleKeyDown(evnt);}
}
