## jQuery UI Autocomplete Extensions ##

These are extensions to the [jQuery UI Autocomplete](http://docs.jquery.com/UI/Autocomplete) widget.

### Accent Folding ###

See [accentFolding.html](autocomplete/accentFolding.html)

Enable accent folding in your search terms. This makes it possible to search for values that contain accents without requiring the user to type the accented characters. For example, a user could search for "Jörn" by simply typing "Jorn".


#### API ####

This extension does not expose any API. Accent folding is automatically enabled for all autocomplete fields.


### Auto Select ###

See [autoSelect.html](autocomplete/autoSelect.html)

Automatically select an item if the user types a valid value and leaves the text field without explicitly selecting the item from the menu.


#### API ####

This extension does not expose any API. Values are automatically selected for all autocomplete fields if there is a perfect match in the results.


### HTML labels ###

See [html.html](autocomplete/html.html)

Allow HTML to be displayed for each item's label.

#### API ####

This extension adds a boolean `html` option. When set to true, the label will be interpreted as HTML. When set to false, the label will be interpreted as text


### Select First Item ###

See [selectFirst.html](autocomplete/selectFirst.html)

Automatically place focus on the first item in the menu. This reduces the number of keystrokes necessary to choose an item.

#### API ####

This extension adds a boolean `selectFirst` option. When set to true, the first item in the menu will automatically be focused when the menu is shown.
