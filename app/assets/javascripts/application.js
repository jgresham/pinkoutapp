// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .
$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Toggle nav when selection made
  $('.nav a').on('click', function(){
    var stuff = $(".navbar-toggle");
    if(!stuff.hasClass("collapsed")) {
      $(".navbar-toggle")[0].click();
    }
  });

  // Scroll to area on button/link click
  $(function() {
    scrollToArea = function(button, area) {
      $(button).click(function() {
        var areaJq = $(area);
        if(areaJq.length) {
          $('html, body').animate({
            scrollTop: areaJq.offset().top - 50
          }, 1000);
          return false;
        }
      });
    };

    //scrollToArea('.contact_link', '#contact');
  });
});
