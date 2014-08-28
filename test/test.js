
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	Figure = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'xfig-figure', function tests() {
	'use strict';

	// SETUP //

	var figure;

	// Any tasks to run before each test:
	beforeEach( function() {
		figure = new Figure();
	});


	// TESTS //

	it( 'should export a constructor', function test() {
		expect( Figure ).to.be.a( 'function' );
	});

	describe( 'create', function tests() {

		it( 'should provide a method to create a figure layer', function test() {
			expect( figure.create ).to.be.a( 'function' );
		});

		it( 'should create a root layer element', function() {
			figure.create();
			expect( figure.root() ).to.not.be.a( 'null' );
		});

		it( 'should append a root layer element to a specified selection', function test() {
			var selection = document.createElement( 'div' );

			selection.className += 'test';

			figure.create( selection );

			expect( selection.children ).to.not.be.an( 'empty' );
		});

	});

	describe( 'root', function tests() {

		it( 'should provide a method to return the root layer element', function test() {
			expect( figure.root ).to.be.a( 'function' );
		});

		it( 'should return the root layer element', function test() {
			figure.create();
			assert.ok( figure.root() );
		});

	});

	describe( 'parent', function tests() {

		it( 'should provide a method to return the parent DOMElement', function test() {
			expect( figure.parent ).to.be.a( 'function' );
		});

		it( 'should return the parent DOMElement', function test() {
			figure.create();
			assert.ok( figure.parent() );
		});

	});

	describe( 'children', function tests() {

		it( 'should provide a method to get child layers', function test() {
			expect( figure.children ).to.be.a( 'function' );
		});

		it( 'should return the layer children', function test() {
			figure.create();
			expect( figure.children() ).to.be.an( 'object' );
		});

	});

	describe( 'config', function tests() {

		it( 'should provide a method to get a layer configuration', function test() {
			expect( figure.config ).to.be.a( 'function' );
		});

		it( 'should return the layer configuration', function test() {
			figure.create();
			expect( figure.config() ).to.be.an( 'object' );
		});

	});

});