/*
 * jQuery UI Autocomplete Auto Select Extension
 *
 * Copyright 2010, Scott González (http://scottgonzalez.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * http://github.com/scottgonzalez/jquery-ui-extensions
 *
 */
(function( $ ) {

$.ui.autocomplete.prototype.options.autoSelect = true;
$(document).on( 'blur', '.ui-autocomplete-input', function( event ) {

	var jQUIver = jQuery.ui.version.split('.');

	var autocomplete = ( jQUIver[0] >=2 || ( jQUIver[0] == 1 && jQUIver[1] >= 10 ) ? $(this).data("uiAutocomplete") : $(this).data("autocomplete") );

	if ( !autocomplete.options.autoSelect || autocomplete.selectedItem ) { return; }

	var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(this).val() ) + "$", "i" );
	autocomplete.widget().children( ".ui-menu-item" ).each(function() {
		var item = ( jQUIver[0] >=2 || ( jQUIver[0] == 1 && jQUIver[1] >= 10 ) ? $(this).data("uiAutocompleteItem") : $(this).data("item.autocomplete") );
		if ( matcher.test( item.label || item.value || item ) ) {
			autocomplete.selectedItem = item;
			return false;
		}
	});
	if ( autocomplete.selectedItem ) {
		autocomplete._trigger( "select", event, { item: autocomplete.selectedItem } );
	}
});

}( jQuery ));
