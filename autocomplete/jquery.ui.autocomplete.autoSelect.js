(function( $ ) {

$.ui.autocomplete.prototype.options.autoSelect = true;
$( ".ui-autocomplete-input" ).live( "blur", function( event ) {
	var autocomplete = $( this ).data( "autocomplete" );
	if ( !autocomplete.options.autoSelect || autocomplete.selectedItem ) { return; }

	var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(this).val() ) + "$", "i" );
	autocomplete.widget().children( ".ui-menu-item" ).each(function() {
		var item = $( this ).data( "item.autocomplete" );
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
