/**
*
*	LAYER: figure
*
*
*	DESCRIPTION:
*		- Factory to create figure layers.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// FIGURE //

	/**
	* FUNCTION: Figure()
	*	Figure constructor. Creates a new figure instance.
	*
	* @constructor
	* @returns {Figure} Figure instance
	*/
	function Figure() {
		this._config = {};
		this._parent = undefined;
		this._root = undefined;
		this._children = {};

		return this;
	} // end FUNCTION Figure()

	/**
	* METHOD: create( document, [selection] )
	*	Creates a new figure element. If a selection is supplied, appends a figure element to a selection. If no selection is supplied, a figure is appended to a newly create HTML element; to access the figure parent, use the parent method.
	*
	* @param {Document} document - document object
	* @param {DOMElement} [selection] - DOM element selection, e.g., document.querySelector( '.main' )
	* @returns {Figure} Figure instance
	*/
	Figure.prototype.create = function( document, selection ) {
		var figure, elements;
		if ( !arguments.length ) {
			throw new Error( 'create()::insufficient input arguments. Must provide a `document` object.' );
		}
		if ( arguments.length < 2 ) {
			selection = document.createElement( 'div' );
		}
		this._parent = selection;
		figure = document.createElement( 'figure' );
		figure.setAttribute( 'property', 'figure' );
		figure.className += 'figure';
		selection.appendChild( figure );
		elements = selection.querySelectorAll( '.figure' );
		this._root = elements[ elements.length - 1 ];
		return this;
	}; // end METHOD create()

	/**
	* METHOD: root()
	*	Returns the root figure element.
	*
	* @returns {DOMElement} figure DOM element
	*/
	Figure.prototype.root = function() {
		return this._root;
	}; // end METHOD root()

	/**
	* METHOD: parent()
	*	Returns the figure parent.
	*
	* @returns {DOMElement} parent DOM element
	*/
	Figure.prototype.parent = function() {
		return this._parent;
	}; // end METHOD parent()

	/**
	* METHOD: children()
	*	Returns the figure children.
	*
	* @returns {Object} figure children
	*/
	Figure.prototype.children = function() {
		return this._children;
	}; // end METHOD children()

	/**
	* METHOD: config()
	*	Returns the figure configuration as a JSON blob.
	*
	* @returns {Object} configuration blob
	*/
	Figure.prototype.config = function() {
		// Prevent direct tampering with the config object:
		return JSON.parse( JSON.stringify( this._config ) );
	}; // end METHOD config()


	// EXPORTS //

	module.exports = Figure;

})();
