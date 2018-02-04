"use strict";
var ElementCollection = function(parameters) {
	Element.call(this, parameters);
	this.subElements = parameters.subElements;
}

ElementCollection.prototype = new Element();

ElementCollection.prototype.constructor = ElementCollection;

ElementCollection.prototype.draw = function(context) {
	if (!this.subElements) {throw "Cannot draw ElementCollection without sub elements.";}
	for (var element of this.subElements) {element.draw(context);};
};

ElementCollection.prototype.update = function() {
	if (!this.subElements) {throw "Cannot update ElementCollection without sub elements.";}
	for (var element of this.subElements) {element.update();};
};