$('.menu__item-spectacle').combobox({

    // Bootstrap version
    bsVersion: '4', 
  
    // default templates
    menu: '<ul class="typeahead typeahead-long dropdown-menu"></ul>', 
    item: '<li><a href="#" class="dropdown-item"></a></li>',
  
    // Custom function with one item argument that compares the item to the input.
    matcher: null,
  
    // Custom function that sorts a list items for display in the dropdown
    sorter: null,
  
    // Custom function for highlighting an item. 
    highlighter: null,
  
    // Custom function that returns markup for the combobox.
    template: null,
  
    // The desired id of the transformed combobox. 
    appendId: null
    
  })
  