/*
 * jQuery UI Dialog Auto Reposition Extension
 *
 * Copyright 2010, Scott González (http://scottgonzalez.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * http://github.com/scottgonzalez/jquery-ui-extensions
 */
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
