$(function() {

var sourceView = $( "<div></div>", {
		"class": "source"
	})
	.appendTo( "body" );

$( "<p>This demo is powered by the following code:</p>").appendTo( sourceView );
$( "<p>Look at the source option to see the possible values.</p>")
	.addClass( "note" )
	.appendTo( sourceView );

$("script:not([src])").each(function() {
	var lines = $( this ).html().split( "\n" );
	lines.shift();

	// unindent by one tab
	// join on \r\n instead of just \n for IE
	var src = $.map( lines, function( line ) {
		return line.substring(1);
	}).join( "\r\n" );

	// append source to the page
	$( "<pre></pre>" )
		.text( src )
		.appendTo( sourceView );
});

// load the CSS, reduces files that need to be included in the actual demo
$.get( "demo.css", function( content ) {
	$( "<style>" + content + "</style>" ).appendTo( "body" );
});

});
