(function( $ ) {

$.ui.dialog.prototype.options.autoReposition = true;
$( window ).resize(function() {
    $( ".ui-dialog-content:visible" ).each(function() {
        var dialog = $( this ).data( "dialog" );
        if ( dialog.options.autoReposition ) {
            dialog.option( "position", dialog.options.position );
        }
    });
});

})( jQuery );
