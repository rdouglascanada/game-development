"use strict";
var ElementCollection = function(parameters) {
	Element.call(this, parameters);
	this.subElements = parameters.subElements;
}

ElementCollection.prototype = new Element({});

ElementCollection.prototype.constructor = ElementCollection;

ElementCollection.prototype.draw = function(context) {
	for (var element of this.subElements) {element.draw(context);};
};

ElementCollection.prototype.update = function() {
	for (var element of this.subElements) {element.update();};
};

ElementCollection.prototype.validate = function() {
	validateIsSpecified(this.subElements, this, "sub elements");
	for (var element of this.subElements) {element.validate();};
};