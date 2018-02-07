"use strict";
var KeyboardHandler = function(parameters) {};

KeyboardHandler.prototype.handleKeyPress = function(evnt) {
	console.log(this.extractEventCode(evnt));
}

KeyboardHandler.prototype.handleKeyUp = function(evnt) {
	console.log(this.extractEventCode(evnt));
}

KeyboardHandler.prototype.handleKeyDown = function(evnt) {
	console.log(this.extractEventCode(evnt));
}

KeyboardHandler.prototype.extractEventCode = function(evnt) {
	var evtObj=window.event? event : evnt; //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
   var unicode=evtObj.charCode? evtObj.charCode : evtObj.keyCode;
   return String.fromCharCode(unicode);
}