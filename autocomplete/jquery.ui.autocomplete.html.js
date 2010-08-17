(function( $ ) {

$.ui.autocomplete.prototype._renderItem = function( ul, item) {
	return $( "<li></li>" )
		.data( "item.autocomplete", item )
		.append( $( "<a></a>" )[ this.options.html ? "html" : "text" ]( item.label ) )
		.appendTo( ul );
};

})( jQuery );
