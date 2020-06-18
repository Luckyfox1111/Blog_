 $('article').readmore({
   speed: 75,
  lessLink: '<a href="#">Read less</a>'
  afterToggle: function(trigger, element, expanded) {
    if(! expanded) { // The "Close" link was clicked
      $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
    }
  }
});