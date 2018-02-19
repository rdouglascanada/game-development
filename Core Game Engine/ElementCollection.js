"use strict";
var ElementCollection = function(parameters) {
	Element.call(this, parameters);
	this.subElements = parameters.subElements;
}

ElementCollection.prototype = new Element({});

ElementCollection.prototype.constructor = ElementCollection;

ElementCollection.prototype.draw = function(context) {
	for (var i = 0; i < this.subElements.length; i++) {this.subElements[i].draw(context);};
};

ElementCollection.prototype.update = function() {
	for (var i = 0; i < this.subElements.length; i++) {this.subElements[i].update();};
};

ElementCollection.prototype.update = function() {
	for (var element of this.subElements) {element.update();};
};