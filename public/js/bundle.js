(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDataSetById = getDataSetById;
exports.searchForDataSets = searchForDataSets;
function getDataSetById(id, version) {
	return new Promise(function (resolve, reject) {
		var url = '/getdataset/' + id + '?version=' + version;
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.onload = function () {
			resolve(JSON.parse(request.response));
		};
		request.onerror = function () {
			reject(new Error("Error retrieving data set"));
		};
		request.send();
	});
}

function searchForDataSets(searchString) {
	return new Promise(function (resolve, reject) {
		var url = '/searchfordatasets';
		var request = new XMLHttpRequest();
		request.open('POST', url, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.onload = function () {
			resolve(JSON.parse(request.response));
		};
		request.onerror = function () {
			reject(new Error("Error retrieving data set"));
		};
		request.send('query=' + searchString);
	});
}

},{}],2:[function(require,module,exports){
"use strict";

var _shit = require("./lib/shit");

var _getdatasets = require("./getdatasets.js");

var _graph = require("./lib/graph");

var _graph2 = _interopRequireDefault(_graph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _shit.shit)();

// Importing Classes
// Importing Single Functions

(0, _shit.otherShit)();

var graph = new _graph2.default({ height: 10 });

},{"./getdatasets.js":1,"./lib/graph":3,"./lib/shit":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = function Graph(args) {
  _classCallCheck(this, Graph);

  console.log("graph class loaded");
};

exports.default = Graph;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shit = shit;
exports.otherShit = otherShit;
var cat = "cat";

function cow() {
    console.log("cow");
    console.log(cat);
}

function shit() {
    cow();
    console.log("shit");
}

function otherShit() {
    console.log("other shitty");
}

},{}]},{},[2]);
