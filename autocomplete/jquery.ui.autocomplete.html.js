/*
 * jQuery UI Autocomplete HTML Extension
 *
 * Copyright 2010, Scott González (http://scottgonzalez.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * http://github.com/scottgonzalez/jquery-ui-extensions
 */
(function( $ ) {

$.ui.autocomplete.prototype._renderItem = function( ul, item) {
	return $( "<li></li>" )
		.data( "item.autocomplete", item )
		.append( $( "<a></a>" )[ this.options.html ? "html" : "text" ]( item.label ) )
		.appendTo( ul );
};

})( jQuery );
