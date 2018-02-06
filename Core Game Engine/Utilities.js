"use strict";
function ifValue(value, defaultValue) {
	if (value) {return value;}
	else {return defaultValue;}
}

function ifSpecified(value, defaultValue) {
	if (value || value === false) {return value;}
	else {return defaultValue;}
}

function isInt(value) {
	if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

function validationMessage(msg, value, instance, nameOfValue) {
	return "Validation Error: " + instance.constructor.name + " " + nameOfValue + " " + msg + " Got " + value;
}

function validateIsString(value, instance, nameOfValue) {
	if (!isString(value)) {throw validationMessage("must be a string.", value, instance, nameOfValue);}
}

function validateIsSpecified(value, instance, nameOfValue) {
	if(!value && value !== false) {throw validationMessage("must be specified.", value, instance, nameOfValue);}
}

function validateIsIn(value, set, instance, nameOfValue) {
	if(!set.has(value)) {throw validationMessage("must be in [" + (Array.from(set)).join(", ") +"].", value, instance, nameOfValue);}
}

function validateIsInt(value, instance, nameOfValue) {
	if (!isInt(value)) {throw validationMessage("must be an integer.", value, instance, nameOfValue);}
}

function validateIsNonnegativeInt(value, instance, nameOfValue) {
	if (!isInt(value) || value < 0) {throw validationMessage("must be a nonnegative integer.", value, instance, nameOfValue);}
}

function validateIsIntStrictlyGreaterThan(value, strictMinimum, instance, nameOfValue) {
	if (!isInt(value) || value <= strictMinimum) {throw validationMessage("must be an integer strictly greater than " + strictMinimum +".", value, instance, nameOfValue);}
}

function validateIsNumber(value, instance, nameOfValue) {
	if (!isNumber(value)) {throw validationMessage("must be a number.", value, instance, nameOfValue);}
}

function validateIsNonnegative(value, instance, nameOfValue) {
	if (!isNumber(value) || value < 0) {throw validationMessage("must be a nonnegative number.", value, instance, nameOfValue);}
}