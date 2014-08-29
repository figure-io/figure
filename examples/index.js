
// MODULES //
var Figure = require( './../lib' );


// FIGURE //

// Create a parent container:
var selection = document.createElement( 'div' );

selection.className += 'widget';

// Create a new figure instance:
var figure = new Figure();

// Append a figure layer to the selection:
figure.create( selection );

// Return the layer root:
console.log( figure.root().className );

/**
* Returns:
*	'figure'
*/

// Return the layer children:
console.log( figure.children() );

/**
* Returns:
*	Hash containing layer children. Here: {}, as no children have been created.
*/

// Return the layer parent:
console.log( figure.parent().className );

/**
* Returns:
*	'widget'
*/

// Return the layer configuration:
console.log( figure.config() );

/**
* Returns:
*	Layer configuration object. Here: {}.
*/