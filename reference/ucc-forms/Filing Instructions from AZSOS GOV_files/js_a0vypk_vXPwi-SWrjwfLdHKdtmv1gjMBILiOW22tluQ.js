/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio = {
    attach: function (context, settings) {

      var position = $(window).scrollTop();
        $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('body').addClass("scrolled");
        }
        else {
          $('body').removeClass("scrolled");
        }
        var scroll = $(window).scrollTop();
        if (scroll > position) {
          $('body').addClass("scrolldown");
          $('body').removeClass("scrollup");
        } else {
          $('body').addClass("scrollup");
          $('body').removeClass("scrolldown");
        }
        position = scroll;
      });

      $('.dropdown-item:not(.menu-item--expanded) a.dropdown-toggle').on("click", function(e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.az_bootstrap = {
    attach: function (context, settings) {
      if (context !== document) {
        return;
      }
      //PDF open in a new tab
      $('a[href$=".pdf"]').attr('target', '_blank');

      //alert block close function --start--
      $('.close-wrapper i').on('click', function () {
        $(this).parents('.alert-block').fadeOut();
        sessionStorage.alertClosed = true;
      });
      var yetVisited = sessionStorage.alertClosed;
      if (!yetVisited) {
          $('.alert-block').fadeIn();
      }
      //alert block close function --end--
      $('.search-icon').on('click', function () {
        $(this).siblings('.search-form-wrapper').toggle();
        $(this).parents('.block-search').toggleClass('search-open');
        $(this).parents().siblings('.navbar-collapse.show').removeClass('show');
        $(this).parents().siblings('.navbar-toggler').attr('aria-expanded', false);

      });
      $( window ).on( 'orientationchange', function ( event ) {
        isDesktop = $(window).width() > 1300 ? true : false;
      });
      var isDesktop = $(window).width() > 1300 ? true : false;
      setTimeout(() => {
        var mainMenuWrapped = $('.header').hasClass('wrapped');

        if (isDesktop && mainMenuWrapped === false) {

          $(function ($) {
            $('.navbar .dropdown').on('mouseenter mouseleave', function () {
                $(this).find('.dropdown-menu').first().stop(true, true).toggle();
                $(this).siblings('.dropdown').find('.dropdown-menu').hide();
                $(this).siblings('.dropdown').removeClass('is-open');
            }, function () {
                $(this).find('.dropdown-menu').first().stop(true, true).toggle();
                $(this).siblings('.dropdown').find('.dropdown-menu').hide();
                $(this).siblings('.dropdown').removeClass('is-open');

                if ($('ul', this).length) {
                  var elm = $('ul:first', this);
                  var off = elm.offset();
                  var l = off.left;
                  var w = elm.width();
                  var docH = $("#page-wrapper").height();
                  var docW = $("#page-wrapper").width();

                  var isEntirelyVisible = (l + w <= docW);

                  if (!isEntirelyVisible) {
                      $(this).addClass('edge');
                  } else {
                      $(this).removeClass('edge');
                  }
                }
            });
            $('.navbar .dropdown > a').on('click', function () {
                location.href = this.href;
            });
          });
        }
        else {
          $('.navbar .dropdown a').on('click', function () {
            location.href = this.href;
          });
        }
      }, 100);
      // $( window ).on( 'resize', function ( event ) {
      //   var aboveMedium = $(window).width() > 1199.98 ? true : false;
      //   if (!aboveMedium) {
      //     $('.caret').click(function () {
      //       $(this).siblings('.dropdown-menu').toggle();
      //       $(this).parent().toggleClass('is-open');
      //     });
      //   }
      // });
      var aboveMedium = $(window).width() > 1300 ? true : false;
      if (!aboveMedium) {
        $('.caret').click(function () {
          $(this).siblings('.dropdown-menu').toggle();
          $(this).parent().toggleClass('is-open');
        });
      }
      //Calculation to place the navitems and search icon to align vertically center of the logo.
      $( window ).on( 'resize', function ( event ) {
        var aboveMedium = $(window).width() > 1199.98 ? true : false;
        setTimeout(() => {
          if (aboveMedium) {
              var navbarHeight = $('.navbar').height() / 2;
              var navItemLineHeight = $('.menu--main .navbar-nav .nav-item .nav-link').css('line-height');
              var navItemLineHeightInteger = parseInt( navItemLineHeight ) / 2;
              var menuDifference = navbarHeight - navItemLineHeightInteger - 1;
              $('#navbar-main .menu--main .navbar-nav .nav-item .nav-link').css('padding-bottom', menuDifference + 'px');
          } else {
            $('#navbar-main .menu--main .navbar-nav .nav-item .nav-link').css('padding-bottom', 0.5 + 'rem');
          }
        }, 100);
        $('#navbar-main.navbar .navbar-collapse').removeClass('show');
        $('#navbar-main.navbar .navbar-toggler').attr('aria-expanded', false);
      });
      var aboveMedium = $(window).width() > 1300 ? true : false;
      if (aboveMedium) {
        //header menu item bottom padding.
        setTimeout(() => {
          var navbarHeight = $('.navbar').height() / 2;
          var navItemLineHeight = $('.menu--main .navbar-nav .nav-item .nav-link').css('line-height');
          var navItemLineHeightInteger = parseInt( navItemLineHeight ) / 2;
          var menuDifference = navbarHeight - navItemLineHeightInteger - 1;
          $('#navbar-main .menu--main .navbar-nav .nav-item .nav-link').css('padding-bottom', menuDifference + 'px');
        }, 100);
      }
      //search icon alignment and padding.
      $( window ).on( 'orientationchange', function ( event ) {
        setTimeout(() => {
          var navbarHeight = $('.navbar').height() / 2;
          var searchIconHeight = $('.navbar .search-wrapper .search-icon i').css('line-height');
          var searchIconHeightInteger = parseInt( searchIconHeight ) / 2;
          var searchPaddingBottom = navbarHeight - searchIconHeightInteger;
          var navbarToggleHeight = $('.navbar-toggler').height() / 2;
          var navbarToggleAlign = navbarHeight - navbarToggleHeight;
          $('#navbar-main.navbar .search-wrapper .search-icon i').css('padding-bottom', searchPaddingBottom - 2 + 'px');
          $('#navbar-main.navbar .search-wrapper .search-icon i').css('padding-top', searchPaddingBottom - 2 + 'px');
          $('#navbar-main.navbar .navbar-toggler').css('top', navbarToggleAlign - 6 + 'px');
        }, 150);
      });
      var navbarHeight = $('.navbar').height() / 2;
      var searchIconHeight = $('.navbar .search-wrapper .search-icon i').css('line-height');
      var searchIconHeightInteger = parseInt( searchIconHeight ) / 2;
      var searchPaddingBottom = navbarHeight - searchIconHeightInteger;
      var navbarToggleHeight = $('.navbar-toggler').height() / 2;
      var navbarToggleAlign = navbarHeight - navbarToggleHeight;
      $('#navbar-main.navbar .search-wrapper .search-icon i').css('padding-bottom', searchPaddingBottom - 0.5 + 'px');
      $('#navbar-main.navbar .search-wrapper .search-icon i').css('padding-top', searchPaddingBottom - 0 + 'px');
      $('#navbar-main.navbar .navbar-toggler').css('top', navbarToggleAlign - 6 + 'px');
      $('.search-icon').on('click', function () {
        var navbarHeight = $('.navbar').height() / 2;
        var searchIconHeight = $('.navbar .search-wrapper .search-icon i').css('line-height');
        var searchIconHeightInteger = parseInt( searchIconHeight ) / 2;
        var searchPaddingBottom = navbarHeight - searchIconHeightInteger;
        $('#navbar-main.navbar .search-wrapper .search-icon i').css('padding-bottom', searchPaddingBottom - 0.5 + 'px');
        $('#navbar-main.navbar .search-wrapper .search-icon i').css('padding-top', searchPaddingBottom - 0 + 'px');
        $('#navbar-main.navbar .search-open .search-wrapper .search-icon i').css('padding-bottom', searchPaddingBottom - 2.5 + 'px');
        $('#navbar-main.navbar .search-open .search-wrapper .search-icon i').css('padding-top', searchPaddingBottom - 2.5 + 'px');
      });

      //Accordion template function
      $('.accordion-template .accordion-header').on('click', function () {
        $(this).parent().toggleClass('is-open');
        $(this).siblings('.accordion-template--collapse').slideToggle();
      });

      //Custom checkbox highlight
      var checkbox = $('.fieldset-wrapper .custom-switch input[type="checkbox"]');
      $(checkbox).on('click', function () {
        if($(this).is(':checked')){
          $(this).parent().addClass('checkbox-checked');
        } else {
          $(this).parent().removeClass('checkbox-checked');
        }
      });
      //Top adjustment for the sticky table header.
      var actualNavbarHeight = $('.navbar').height();
      setTimeout(function () {
        var sliverHeaderHeight = $('#az-sliver').height();
        var totalHeaderHeight = actualNavbarHeight + totalHeaderHeight;

        $('.az-account-menu').css('top', ( actualNavbarHeight + sliverHeaderHeight ) );
        $(window).on('resize', function(){
            $('.az-account-menu').css('top', ( actualNavbarHeight + sliverHeaderHeight ) );
        });
      }, 1500);

      setTimeout(function () {
        $('table.sticky-header').css('top', actualNavbarHeight );
      }, 500);
      if ($(window).width() >= 992 && $(window).width() <= 1300) {
        $('header .navbar .navbar-collapse').css('top', actualNavbarHeight );
      }
      $(window).on('resize', function(){
        if ($(window).width() >= 992 && $(window).width() <= 1300) {
          $('header .navbar .navbar-collapse').css('top', actualNavbarHeight );
        }
      });

      //Removing main menu classes and attributes in the sidebar to allow clicking of links
      $("#content nav.block-menu  a, #sidebar_second nav.block-menu a").removeClass("dropdown-toggle");
      $("#content nav.block-menu  a, #sidebar_second nav.block-menu a").removeAttr("data-toggle");

      // Removing a class from the ad to calendar
      $('.az-full-content.layout .addtocalendar').removeClass('atc-style-glow-orange');

      // Resource accordion

      $(document).on("click", '.az-resources  .az-resource-button button', function(event) {
        $(this).parents('.az-resources').toggleClass('collapse-open');
      });

      // check if mai Menu wrapped

      menuWrapped();

      $(window).on('resize', function() {
        menuWrapped();
      });

      function menuWrapped() {
        var offset_top_prev=0;
				var firstItem = 1;
				$('#header').removeClass('wrapped');
				$('#header .nav-item').each(function() {
          var offset_top = $(this).offset().top;
          console.log("cur: " + offset_top + "  prev: " + offset_top_prev);
          if (offset_top > offset_top_prev && !firstItem) {
            $(this).parents('#header').addClass('wrapped');
          } else {
          	firstItem = 0;
          }
          offset_top_prev = offset_top;
    		});
      }
      setTimeout(function () {
        $(window).trigger('resize');
      }, 500);

      $('.wrapped .caret').click(function () {
        $(this).siblings('.dropdown-menu').toggle();
        $(this).parent().toggleClass('is-open');
      });

    }
  };

   //slowing down slick slideshow to 8 seconds
  $(document).ready( function() {
    var slider = $(".slick .slick__slider");
    if(slider.length != 0){
      slider.slick('slickSetOption', 'autoplaySpeed', 8000, true);
    }
  });

})(jQuery, Drupal);
;
/**
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal, drupalSettings) {
    Drupal.color = {
        logoChanged: false,
        bgChanged: false,
        callback: function callback(context, settings, $form) {

            var $colorPreview = $form.find('.color-preview');
            var $colorPalette = $form.find('.js-color-palette');

            $colorPreview.find('.color-preview-main-menu .navbar-nav .nav-item .dropdown-menu .dropdown-item.active, .color-preview-searchicon img').css('background', $colorPalette.find('input[name="palette[secondary]"]').val());
            $colorPreview.find('.color-preview-main-menu .navbar-nav .nav-item .dropdown-menu').css('background', $colorPalette.find('input[name="palette[mainnav]"]').val());
            $colorPreview.find('.color-preview-site-name, .color-preview-node .preview-content a').css('color', $colorPalette.find('input[name="palette[primary]"]').val());
            $colorPreview.find('.color-preview-node .preview-content .btn-primary').css('background', $colorPalette.find('input[name="palette[primary]"]').val());
            $colorPreview.find('.color-preview-announcements').css('background', $colorPalette.find('input[name="palette[announcements]"]').val());
            $colorPreview.find('.color-preview-footer-wrapper').css('background-color', $colorPalette.find('input[name="palette[footer]"]').val());
            $colorPreview.find('.color-preview-main-menu .navbar-nav .nav-item .dropdown-menu .is-active').css('color', $colorPalette.find('input[name="palette[dropdowntext]"]').val());
            $colorPreview.find('.color-preview-node .preview-content .btn-primary').mouseenter(function(){
                $(this).css('background', $colorPalette.find('input[name="palette[hover]"]').val());
            });
            $colorPreview.find('.color-preview-node .preview-content .btn-primary').mouseleave(function(){
                $(this).css('background', $colorPalette.find('input[name="palette[primary]"]').val());
            });
        }
    };
})(jQuery, Drupal, drupalSettings);
;
/*!
 * Lightbox v2.11.3
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */

// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.lightbox = factory(root.jQuery);
    }
}(this, function ($) {

  function Lightbox(options) {
    this.album = [];
    this.currentImageIndex = void 0;
    this.init();

    // options
    this.options = $.extend({}, this.constructor.defaults);
    this.option(options);
  }

  // Descriptions of all options available on the demo site:
  // http://lokeshdhakar.com/projects/lightbox2/index.html#options
  Lightbox.defaults = {
    albumLabel: 'Image %1 of %2',
    alwaysShowNavOnTouchDevices: false,
    fadeDuration: 600,
    fitImagesInViewport: true,
    imageFadeDuration: 600,
    // maxWidth: 800,
    // maxHeight: 600,
    positionFromTop: 50,
    resizeDuration: 700,
    showImageNumberLabel: true,
    wrapAround: false,
    disableScrolling: false,
    /*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.

    If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */
    sanitizeTitle: false
  };

  Lightbox.prototype.option = function(options) {
    $.extend(this.options, options);
  };

  Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {
    return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
  };

  Lightbox.prototype.init = function() {
    var self = this;
    // Both enable and build methods require the body tag to be in the DOM.
    $(document).ready(function() {
      self.enable();
      self.build();
    });
  };

  // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
  // that contain 'lightbox'. When these are clicked, start lightbox.
  Lightbox.prototype.enable = function() {
    var self = this;
    $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
      self.start($(event.currentTarget));
      return false;
    });
  };

  // Build html for the lightbox and the overlay.
  // Attach event handlers to the new DOM elements. click click click
  Lightbox.prototype.build = function() {
    if ($('#lightbox').length > 0) {
        return;
    }

    var self = this;

    // The two root notes generated, #lightboxOverlay and #lightbox are given
    // tabindex attrs so they are focusable. We attach our keyboard event
    // listeners to these two elements, and not the document. Clicking anywhere
    // while Lightbox is opened will keep the focus on or inside one of these
    // two elements.
    //
    // We do this so we can prevent propogation of the Esc keypress when
    // Lightbox is open. This prevents it from intefering with other components
    // on the page below.
    //
    // Github issue: https://github.com/lokesh/lightbox2/issues/663
    $('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div></div>').appendTo($('body'));

    // Cache jQuery objects
    this.$lightbox       = $('#lightbox');
    this.$overlay        = $('#lightboxOverlay');
    this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
    this.$container      = this.$lightbox.find('.lb-container');
    this.$image          = this.$lightbox.find('.lb-image');
    this.$nav            = this.$lightbox.find('.lb-nav');

    // Store css values for future lookup
    this.containerPadding = {
      top: parseInt(this.$container.css('padding-top'), 10),
      right: parseInt(this.$container.css('padding-right'), 10),
      bottom: parseInt(this.$container.css('padding-bottom'), 10),
      left: parseInt(this.$container.css('padding-left'), 10)
    };

    this.imageBorderWidth = {
      top: parseInt(this.$image.css('border-top-width'), 10),
      right: parseInt(this.$image.css('border-right-width'), 10),
      bottom: parseInt(this.$image.css('border-bottom-width'), 10),
      left: parseInt(this.$image.css('border-left-width'), 10)
    };

    // Attach event handlers to the newly minted DOM elements
    this.$overlay.hide().on('click', function() {
      self.end();
      return false;
    });

    this.$lightbox.hide().on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
    });

    this.$outerContainer.on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$lightbox.find('.lb-prev').on('click', function() {
      if (self.currentImageIndex === 0) {
        self.changeImage(self.album.length - 1);
      } else {
        self.changeImage(self.currentImageIndex - 1);
      }
      return false;
    });

    this.$lightbox.find('.lb-next').on('click', function() {
      if (self.currentImageIndex === self.album.length - 1) {
        self.changeImage(0);
      } else {
        self.changeImage(self.currentImageIndex + 1);
      }
      return false;
    });

    /*
      Show context menu for image on right-click

      There is a div containing the navigation that spans the entire image and lives above of it. If
      you right-click, you are right clicking this div and not the image. This prevents users from
      saving the image or using other context menu actions with the image.

      To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
      set pointer-events to none on the nav div. This is so that the upcoming right-click event on
      the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
      we set the pointer events back to auto for the nav div so it can capture hover and left-click
      events as usual.
     */
    this.$nav.on('mousedown', function(event) {
      if (event.which === 3) {
        self.$nav.css('pointer-events', 'none');

        self.$lightbox.one('contextmenu', function() {
          setTimeout(function() {
              this.$nav.css('pointer-events', 'auto');
          }.bind(self), 0);
        });
      }
    });


    this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
      self.end();
      return false;
    });
  };

  // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
  Lightbox.prototype.start = function($link) {
    var self    = this;
    var $window = $(window);

    $window.on('resize', $.proxy(this.sizeOverlay, this));

    this.sizeOverlay();

    this.album = [];
    var imageNumber = 0;

    function addToAlbum($link) {
      self.album.push({
        alt: $link.attr('data-alt'),
        link: $link.attr('href'),
        title: $link.attr('data-title') || $link.attr('title')
      });
    }

    // Support both data-lightbox attribute and rel attribute implementations
    var dataLightboxValue = $link.attr('data-lightbox');
    var $links;

    if (dataLightboxValue) {
      $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
      for (var i = 0; i < $links.length; i = ++i) {
        addToAlbum($($links[i]));
        if ($links[i] === $link[0]) {
          imageNumber = i;
        }
      }
    } else {
      if ($link.attr('rel') === 'lightbox') {
        // If image is not part of a set
        addToAlbum($link);
      } else {
        // If image is part of a set
        $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
        for (var j = 0; j < $links.length; j = ++j) {
          addToAlbum($($links[j]));
          if ($links[j] === $link[0]) {
            imageNumber = j;
          }
        }
      }
    }

    // Position Lightbox
    var top  = $window.scrollTop() + this.options.positionFromTop;
    var left = $window.scrollLeft();
    this.$lightbox.css({
      top: top + 'px',
      left: left + 'px'
    }).fadeIn(this.options.fadeDuration);

    // Disable scrolling of the page while open
    if (this.options.disableScrolling) {
      $('body').addClass('lb-disable-scrolling');
    }

    this.changeImage(imageNumber);
  };

  // Hide most UI elements in preparation for the animated resizing of the lightbox.
  Lightbox.prototype.changeImage = function(imageNumber) {
    var self = this;
    var filename = this.album[imageNumber].link;
    var filetype = filename.split('.').slice(-1)[0];
    var $image = this.$lightbox.find('.lb-image');

    // Disable keyboard nav during transitions
    this.disableKeyboardNav();

    // Show loading state
    this.$overlay.fadeIn(this.options.fadeDuration);
    $('.lb-loader').fadeIn('slow');
    this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
    this.$outerContainer.addClass('animating');

    // When image to show is preloaded, we send the width and height to sizeContainer()
    var preloader = new Image();
    preloader.onload = function() {
      var $preloader;
      var imageHeight;
      var imageWidth;
      var maxImageHeight;
      var maxImageWidth;
      var windowHeight;
      var windowWidth;

      $image.attr({
        'alt': self.album[imageNumber].alt,
        'src': filename
      });

      $preloader = $(preloader);

      $image.width(preloader.width);
      $image.height(preloader.height);
      windowWidth = $(window).width();
      windowHeight = $(window).height();

      // Calculate the max image dimensions for the current viewport.
      // Take into account the border around the image and an additional 10px gutter on each side.
      maxImageWidth  = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
      maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - self.options.positionFromTop - 70;

      /*
      Since many SVGs have small intrinsic dimensions, but they support scaling
      up without quality loss because of their vector format, max out their
      size.
      */
      if (filetype === 'svg') {
        $image.width(maxImageWidth);
        $image.height(maxImageHeight);
      }

      // Fit image inside the viewport.
      if (self.options.fitImagesInViewport) {

        // Check if image size is larger then maxWidth|maxHeight in settings
        if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
          maxImageWidth = self.options.maxWidth;
        }
        if (self.options.maxHeight && self.options.maxHeight < maxImageHeight) {
          maxImageHeight = self.options.maxHeight;
        }

      } else {
        maxImageWidth = self.options.maxWidth || preloader.width || maxImageWidth;
        maxImageHeight = self.options.maxHeight || preloader.height || maxImageHeight;
      }

      // Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
      // option than we need to size down while maintaining the aspect ratio.
      if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
        if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
          imageWidth  = maxImageWidth;
          imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
          $image.width(imageWidth);
          $image.height(imageHeight);
        } else {
          imageHeight = maxImageHeight;
          imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
          $image.width(imageWidth);
          $image.height(imageHeight);
        }
      }
      self.sizeContainer($image.width(), $image.height());
    };

    // Preload image before showing
    preloader.src = this.album[imageNumber].link;
    this.currentImageIndex = imageNumber;
  };

  // Stretch overlay to fit the viewport
  Lightbox.prototype.sizeOverlay = function() {
    var self = this;
    /*
    We use a setTimeout 0 to pause JS execution and let the rendering catch-up.
    Why do this? If the `disableScrolling` option is set to true, a class is added to the body
    tag that disables scrolling and hides the scrollbar. We want to make sure the scrollbar is
    hidden before we measure the document width, as the presence of the scrollbar will affect the
    number.
    */
    setTimeout(function() {
      self.$overlay
        .width($(document).width())
        .height($(document).height());

    }, 0);
  };

  // Animate the size of the lightbox to fit the image we are showing
  // This method also shows the the image.
  Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
    var self = this;

    var oldWidth  = this.$outerContainer.outerWidth();
    var oldHeight = this.$outerContainer.outerHeight();
    var newWidth  = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
    var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

    function postResize() {
      self.$lightbox.find('.lb-dataContainer').width(newWidth);
      self.$lightbox.find('.lb-prevLink').height(newHeight);
      self.$lightbox.find('.lb-nextLink').height(newHeight);

      // Set focus on one of the two root nodes so keyboard events are captured.
      self.$overlay.focus();

      self.showImage();
    }

    if (oldWidth !== newWidth || oldHeight !== newHeight) {
      this.$outerContainer.animate({
        width: newWidth,
        height: newHeight
      }, this.options.resizeDuration, 'swing', function() {
        postResize();
      });
    } else {
      postResize();
    }
  };

  // Display the image and its details and begin preload neighboring images.
  Lightbox.prototype.showImage = function() {
    this.$lightbox.find('.lb-loader').stop(true).hide();
    this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);

    this.updateNav();
    this.updateDetails();
    this.preloadNeighboringImages();
    this.enableKeyboardNav();
  };

  // Display previous and next navigation if appropriate.
  Lightbox.prototype.updateNav = function() {
    // Check to see if the browser supports touch events. If so, we take the conservative approach
    // and assume that mouse hover events are not supported and always show prev/next navigation
    // arrows in image sets.
    var alwaysShowNav = false;
    try {
      document.createEvent('TouchEvent');
      alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
    } catch (e) {}

    this.$lightbox.find('.lb-nav').show();

    if (this.album.length > 1) {
      if (this.options.wrapAround) {
        if (alwaysShowNav) {
          this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
        }
        this.$lightbox.find('.lb-prev, .lb-next').show();
      } else {
        if (this.currentImageIndex > 0) {
          this.$lightbox.find('.lb-prev').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-prev').css('opacity', '1');
          }
        }
        if (this.currentImageIndex < this.album.length - 1) {
          this.$lightbox.find('.lb-next').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-next').css('opacity', '1');
          }
        }
      }
    }
  };

  // Display caption, image number, and closing button.
  Lightbox.prototype.updateDetails = function() {
    var self = this;

    // Enable anchor clicks in the injected caption html.
    // Thanks Nate Wright for the fix. @https://github.com/NateWr
    if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
      this.album[this.currentImageIndex].title !== '') {
      var $caption = this.$lightbox.find('.lb-caption');
      if (this.options.sanitizeTitle) {
        $caption.text(this.album[this.currentImageIndex].title);
      } else {
        $caption.html(this.album[this.currentImageIndex].title);
      }
      $caption.fadeIn('fast');
    }

    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
      this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
    } else {
      this.$lightbox.find('.lb-number').hide();
    }

    this.$outerContainer.removeClass('animating');

    this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {
      return self.sizeOverlay();
    });
  };

  // Preload previous and next images in set.
  Lightbox.prototype.preloadNeighboringImages = function() {
    if (this.album.length > this.currentImageIndex + 1) {
      var preloadNext = new Image();
      preloadNext.src = this.album[this.currentImageIndex + 1].link;
    }
    if (this.currentImageIndex > 0) {
      var preloadPrev = new Image();
      preloadPrev.src = this.album[this.currentImageIndex - 1].link;
    }
  };

  Lightbox.prototype.enableKeyboardNav = function() {
    this.$lightbox.on('keyup.keyboard', $.proxy(this.keyboardAction, this));
    this.$overlay.on('keyup.keyboard', $.proxy(this.keyboardAction, this));
  };

  Lightbox.prototype.disableKeyboardNav = function() {
    this.$lightbox.off('.keyboard');
    this.$overlay.off('.keyboard');
  };

  Lightbox.prototype.keyboardAction = function(event) {
    var KEYCODE_ESC        = 27;
    var KEYCODE_LEFTARROW  = 37;
    var KEYCODE_RIGHTARROW = 39;

    var keycode = event.keyCode;
    if (keycode === KEYCODE_ESC) {
      // Prevent bubbling so as to not affect other components on the page.
      event.stopPropagation();
      this.end();
    } else if (keycode === KEYCODE_LEFTARROW) {
      if (this.currentImageIndex !== 0) {
        this.changeImage(this.currentImageIndex - 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(this.album.length - 1);
      }
    } else if (keycode === KEYCODE_RIGHTARROW) {
      if (this.currentImageIndex !== this.album.length - 1) {
        this.changeImage(this.currentImageIndex + 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(0);
      }
    }
  };

  // Closing time. :-(
  Lightbox.prototype.end = function() {
    this.disableKeyboardNav();
    $(window).off('resize', this.sizeOverlay);
    this.$lightbox.fadeOut(this.options.fadeDuration);
    this.$overlay.fadeOut(this.options.fadeDuration);

    if (this.options.disableScrolling) {
      $('body').removeClass('lb-disable-scrolling');
    }
  };

  return new Lightbox();
}));
;
/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.az_custom_theme = {
    attach: function (context, settings) {

    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * JavaScript behaviors to fix jQuery UI dialogs.
 */

(function ($, Drupal, once) {

  'use strict';

  /**
   * Ensure that ckeditor has focus when displayed inside of jquery-ui dialog widget
   *
   * @see http://stackoverflow.com/questions/20533487/how-to-ensure-that-ckeditor-has-focus-when-displayed-inside-of-jquery-ui-dialog
   */
  if ($.ui && $.ui.dialog && $.ui.dialog.prototype._allowInteraction) {
    var _allowInteraction = $.ui.dialog.prototype._allowInteraction;
    $.ui.dialog.prototype._allowInteraction = function (event) {
      if ($(event.target).closest('.cke_dialog').length) {
        return true;
      }
      return _allowInteraction.apply(this, arguments);
    };
  }

  /**
   * Attaches webform dialog behaviors.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches event listeners for webform dialogs.
   */
  Drupal.behaviors.webformDialogEvents = {
    attach: function () {
      if (once('webform-dialog', 'html').length) {
        $(window).on({
          'dialog:aftercreate': function (event, dialog, $element, settings) {
            setTimeout(function () {
              var hasFocus = $element.find('[autofocus]:tabbable');
              if (!hasFocus.length) {
                // Move focus to first input which is not a button.
                hasFocus = $element.find(':input:tabbable:not(:button)');
              }
              if (!hasFocus.length) {
                // Move focus to close dialog button.
                hasFocus = $element.parent().find('.ui-dialog-titlebar-close');
              }
              hasFocus.eq(0).trigger('focus');
            });
          }
        });
      }
    }
  };

})(jQuery, Drupal, once);
;
/**
 * @file
 * JavaScript behaviors for webform dialogs.
 */

(function ($, Drupal, drupalSettings, once) {

  'use strict';

  // @see http://api.jqueryui.com/dialog/
  Drupal.webform = Drupal.webform || {};
  Drupal.webform.dialog = Drupal.webform.dialog || {};
  Drupal.webform.dialog.options = Drupal.webform.dialog.options || {};

  /**
   * Programmatically open a webform (or page) in a dialog.
   *
   * @param {string} url
   *   Webform URL.
   * @param {string} type
   *   Webform dialog type defined via /admin/structure/webform/config.
   */
  Drupal.webformOpenDialog = function (url, type) {
    // Create a div with link but don't attach it to the page.
    var $div = $('<div><a href="' + url + '" class="webform-dialog ' + type + '"></a></div>');
    // Init the webform dialog behavior.
    Drupal.behaviors.webformDialog.attach($div.get(0));
    // Trigger the link.
    $div.find('a').trigger('click');
  };

  /**
   * Open webform dialog using preset options.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformDialog = {
    attach: function (context) {
      $(once('webform-dialog', 'a.webform-dialog', context)).each(function () {
        var $a = $(this);

        // Get default options.
        var options = $.extend({}, Drupal.webform.dialog.options);

        // Get preset dialog options.
        if ($a.attr('class').match(/webform-dialog-([a-z0-9_]+)/)) {
          var dialogOptionsName = RegExp.$1;
          if (drupalSettings.webform.dialog.options[dialogOptionsName]) {
            options = drupalSettings.webform.dialog.options[dialogOptionsName];

            // Unset title.
            delete options.title;
          }
        }

        // Get custom dialog options.
        if ($(this).data('dialog-options')) {
          $.extend(options, $(this).data('dialog-options'));
        }

        var href = $a.attr('href');

        // Replace ENTITY_TYPE and ENTITY_ID placeholders and update the href.
        // @see webform_page_attachments()
        if (href.indexOf('?source_entity_type=ENTITY_TYPE&source_entity_id=ENTITY_ID') !== -1) {
          if (drupalSettings.webform.dialog.entity_type && drupalSettings.webform.dialog.entity_id) {
            href = href.replace('ENTITY_TYPE', encodeURIComponent(drupalSettings.webform.dialog.entity_type));
            href = href.replace('ENTITY_ID', encodeURIComponent(drupalSettings.webform.dialog.entity_id));
          }
          else {
            href = href.replace('?source_entity_type=ENTITY_TYPE&source_entity_id=ENTITY_ID', '');
          }
          $a.attr('href', href);
        }

        // Append _webform_dialog=1 to href to trigger Ajax support.
        // @see \Drupal\webform\WebformSubmissionForm::setEntity
        href += (href.indexOf('?') === -1 ? '?' : '&') + '_webform_dialog=1';

        var element_settings = {};
        element_settings.progress = {type: 'fullscreen'};
        element_settings.url = href;
        element_settings.event = 'click';
        element_settings.dialogType = $a.data('dialog-type') || 'modal';
        element_settings.dialog = options;
        element_settings.element = this;
        element_settings.error = function error(xmlhttp, uri) {
          if (xmlhttp.status === 403) {
            window.location.replace(href.split('?')[0]);
          }
        };
        Drupal.ajax(element_settings);
      });
    }
  };

})(jQuery, Drupal, drupalSettings, once);
;
/**
 * @file
 * External links js file.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.extlink = Drupal.extlink || {};

  Drupal.extlink.attach = function (context, drupalSettings) {
    if (typeof drupalSettings.data === 'undefined' || !drupalSettings.data.hasOwnProperty('extlink')) {
      return;
    }

    // Define the jQuery method (either 'append' or 'prepend') of placing the
    // icon, defaults to 'append'.
    var extIconPlacement = 'append';
    if (drupalSettings.data.extlink.extIconPlacement && drupalSettings.data.extlink.extIconPlacement != '0') {
          extIconPlacement = drupalSettings.data.extlink.extIconPlacement;
        }

    // Strip the host name down, removing ports, subdomains, or www.
    var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
    var host = window.location.host.replace(pattern, '$2$3$6');
    var subdomain = window.location.host.replace(host, '');

    // Determine what subdomains are considered internal.
    var subdomains;
    if (drupalSettings.data.extlink.extSubdomains) {
      subdomains = '([^/]*\\.)?';
    }
    else if (subdomain === 'www.' || subdomain === '') {
      subdomains = '(www\\.)?';
    }
    else {
      subdomains = subdomain.replace('.', '\\.');
    }

    // Whitelisted domains.
    var whitelistedDomains = false;
    if (drupalSettings.data.extlink.whitelistedDomains) {
      whitelistedDomains = [];
      for (var i = 0; i < drupalSettings.data.extlink.whitelistedDomains.length; i++) {
        whitelistedDomains.push(new RegExp('^https?:\\/\\/' + drupalSettings.data.extlink.whitelistedDomains[i].replace(/(\r\n|\n|\r)/gm,'') + '.*$', 'i'));
      }
    }

    // Build regular expressions that define an internal link.
    var internal_link = new RegExp('^https?://([^@]*@)?' + subdomains + host, 'i');

    // Extra internal link matching.
    var extInclude = false;
    if (drupalSettings.data.extlink.extInclude) {
      extInclude = new RegExp(drupalSettings.data.extlink.extInclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link matching.
    var extExclude = false;
    if (drupalSettings.data.extlink.extExclude) {
      extExclude = new RegExp(drupalSettings.data.extlink.extExclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link CSS selector exclusion.
    var extCssExclude = false;
    if (drupalSettings.data.extlink.extCssExclude) {
      extCssExclude = drupalSettings.data.extlink.extCssExclude;
    }

    // Extra external link CSS selector explicit.
    var extCssExplicit = false;
    if (drupalSettings.data.extlink.extCssExplicit) {
      extCssExplicit = drupalSettings.data.extlink.extCssExplicit;
    }

    // Find all links which are NOT internal and begin with http as opposed
    // to ftp://, javascript:, etc. other kinds of links.
    // When operating on the 'this' variable, the host has been appended to
    // all links by the browser, even local ones.
    // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
    // available in jQuery 1.0 (Drupal 5 default).
    var external_links = [];
    var mailto_links = [];
    $('a:not([data-extlink]), area:not([data-extlink])', context).each(function (el) {
      try {
        var url = '';
        if (typeof this.href == 'string') {
          url = this.href.toLowerCase();
        }
        // Handle SVG links (xlink:href).
        else if (typeof this.href == 'object') {
          url = this.href.baseVal;
        }
        if (url.indexOf('http') === 0
          && ((!internal_link.test(url) && !(extExclude && extExclude.test(url))) || (extInclude && extInclude.test(url)))
          && !(extCssExclude && $(this).is(extCssExclude))
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          var match = false;
          if (whitelistedDomains) {
            for (var i = 0; i < whitelistedDomains.length; i++) {
              if (whitelistedDomains[i].test(url)) {
                match = true;
                break;
              }
            }
          }
          if (!match) {
            external_links.push(this);
          }
        }
        // Do not include area tags with begin with mailto: (this prohibits
        // icons from being added to image-maps).
        else if (this.tagName !== 'AREA'
          && url.indexOf('mailto:') === 0
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          mailto_links.push(this);
        }
      }
      // IE7 throws errors often when dealing with irregular links, such as:
      // <a href="node/10"></a> Empty tags.
      // <a href="http://user:pass@example.com">example</a> User:pass syntax.
      catch (error) {
        return false;
      }
    });

    if (drupalSettings.data.extlink.extClass !== '0' && drupalSettings.data.extlink.extClass !== '') {
      Drupal.extlink.applyClassAndSpan(external_links, drupalSettings.data.extlink.extClass, extIconPlacement);
    }

    if (drupalSettings.data.extlink.mailtoClass !== '0' && drupalSettings.data.extlink.mailtoClass !== '') {
      Drupal.extlink.applyClassAndSpan(mailto_links, drupalSettings.data.extlink.mailtoClass, extIconPlacement);
    }

    if (drupalSettings.data.extlink.extTarget) {
      // Apply the target attribute to all links.
      $(external_links).filter(function () {
        // Filter out links with target set if option specified.
        return !(drupalSettings.data.extlink.extTargetNoOverride && $(this).is('a[target]'));
      }).attr({target: '_blank'});

      // Add noopener rel attribute to combat phishing.
      $(external_links).attr('rel', function (i, val) {
        // If no rel attribute is present, create one with the value noopener.
        if (val === null || typeof val === 'undefined') {
          return 'noopener';
        }
        // Check to see if rel contains noopener. Add what doesn't exist.
        if (val.indexOf('noopener') > -1) {
          if (val.indexOf('noopener') === -1) {
            return val + ' noopener';
          }
          // Noopener exists. Nothing needs to be added.
          else {
            return val;
          }
        }
        // Else, append noopener to val.
        else {
          return val + ' noopener';
        }
      });
    }

    if (drupalSettings.data.extlink.extNofollow) {
      $(external_links).attr('rel', function (i, val) {
        // When the link does not have a rel attribute set it to 'nofollow'.
        if (val === null || typeof val === 'undefined') {
          return 'nofollow';
        }
        var target = 'nofollow';
        // Change the target, if not overriding follow.
        if (drupalSettings.data.extlink.extFollowNoOverride) {
          target = 'follow';
        }
        if (val.indexOf(target) === -1) {
          return val + ' nofollow';
        }
        return val;
      });
    }

    if (drupalSettings.data.extlink.extNoreferrer) {
      $(external_links).attr('rel', function (i, val) {
        // When the link does not have a rel attribute set it to 'noreferrer'.
        if (val === null || typeof val === 'undefined') {
          return 'noreferrer';
        }
        if (val.indexOf('noreferrer') === -1) {
          return val + ' noreferrer';
        }
        return val;
      });
    }

    Drupal.extlink = Drupal.extlink || {};

    // Set up default click function for the external links popup. This should be
    // overridden by modules wanting to alter the popup.
    Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function () {
      if (drupalSettings.data.extlink.extAlert) {
        return confirm(drupalSettings.data.extlink.extAlertText);
      }
    };

    $(external_links).off("click.extlink");
    $(external_links).on("click.extlink", function (e) {
      return Drupal.extlink.popupClickHandler(e, this);
    });
  };

  /**
   * Apply a class and a trailing <span> to all links not containing images.
   *
   * @param {object[]} links
   *   An array of DOM elements representing the links.
   * @param {string} class_name
   *   The class to apply to the links.
   * @param {string} icon_placement
   *   'append' or 'prepend' the icon to the link.
   */
  Drupal.extlink.applyClassAndSpan = function (links, class_name, icon_placement) {
    var $links_to_process;
    if (drupalSettings.data.extlink.extImgClass) {
      $links_to_process = $(links);
    }
    else {
      var links_with_images = $(links).find('img, svg').parents('a');
      $links_to_process = $(links).not(links_with_images);
    }

    if (class_name !== '0') {
      $links_to_process.addClass(class_name);
    }

    // Add data-extlink attribute.
    $links_to_process.attr('data-extlink', '');

    var i;
    var length = $links_to_process.length;
    for (i = 0; i < length; i++) {
      var $link = $($links_to_process[i]);
      if (drupalSettings.data.extlink.extUseFontAwesome) {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaMailtoClasses + '" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '"></span></span>');
        }
        else {
          $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaLinkClasses + '" aria-label="' + drupalSettings.data.extlink.extLabel + '"></span></span>');
        }
      }
      else {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 70 20"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.mailtoLabel + '</title><path d="M56 14H8c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h48c1.1 0 2-0.9 2-2V16C58 14.9 57.1 14 56 14zM50.5 18L32 33.4 13.5 18H50.5zM10 46V20.3l20.7 17.3C31.1 37.8 31.5 38 32 38s0.9-0.2 1.3-0.5L54 20.3V46H10z"/></svg>');
        }
        else {
          $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.extLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.extLabel + '</title><path d="M48 26c-1.1 0-2 0.9-2 2v26H10V18h26c1.1 0 2-0.9 2-2s-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v40c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2V28C50 26.9 49.1 26 48 26z"/><path d="M56 6H44c-1.1 0-2 0.9-2 2s0.9 2 2 2h7.2L30.6 30.6c-0.8 0.8-0.8 2 0 2.8C31 33.8 31.5 34 32 34s1-0.2 1.4-0.6L54 12.8V20c0 1.1 0.9 2 2 2s2-0.9 2-2V8C58 6.9 57.1 6 56 6z"/></svg>');
        }
      }
    }
  };

  Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
  Drupal.behaviors.extlink.attach = function (context, drupalSettings) {
    // Backwards compatibility, for the benefit of modules overriding extlink
    // functionality by defining an "extlinkAttach" global function.
    if (typeof extlinkAttach === 'function') {
      extlinkAttach(context);
    }
    else {
      Drupal.extlink.attach(context, drupalSettings);
    }
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Behaviors of Boostrap Layout Builder local video background.
 */

(function ($, _, Drupal, drupalSettings) {
  "use strict";

  Drupal.behaviors.scrollEffectsInit = {
    attach: function (context, settings) {
      AOS.init();
    }
  }

})(window.jQuery, window._, window.Drupal, window.drupalSettings);
;
/**
 * @file
 * better_exposed_filters.js
 *
 * Provides some client-side functionality for the Better Exposed Filters module.
 */

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.betterExposedFilters = {
    attach: function (context, settings) {
      // Add highlight class to checked checkboxes for better theming.
      $('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]')
        // Highlight newly selected checkboxes.
        .change(function () {
          _bef_highlight(this, context);
        })
        .filter(':checked').closest('.form-item', context).addClass('highlight');
    }
  };

  /*
   * Helper functions
   */

  /**
   * Adds/Removes the highlight class from the form-item div as appropriate.
   */
  function _bef_highlight(elem, context) {
    $elem = $(elem, context);
    $elem.attr('checked')
      ? $elem.closest('.form-item', context).addClass('highlight')
      : $elem.closest('.form-item', context).removeClass('highlight');
  }

})(jQuery, Drupal, drupalSettings);
;
(function ($, Drupal) {
  $.fn.bindFirst = function (events, fn) {
    let elem, handlers, i, _len;
    this.on(events, fn);
    for (i = 0, _len = this.length; i < _len; i++) {
      elem = this[i];
      events.split(' ').forEach(function (event) {
        handlers = jQuery._data(elem).events[event.split('.')[0]];
        handlers.unshift(handlers.pop());
      })
    }
  };
  $('nav ul ul li:last-child a').focusout( function() {
    $(this).parent().parent().css("display", "none");
    $(this).parent().parent().siblings("a").attr('aria-expanded', 'false');
  });
  $('nav ul ul li:first-child a').bindFirst('keydown', function (e) {
    var key = e.key;
    if(key === 'Tab' && e.shiftKey){
      $(this).parent().parent().css("display", "none");
      $(this).parent().parent().siblings("a").attr('aria-expanded', 'false');
    }
  });
  $('nav li.menu-item--expanded>a').bindFirst('keydown', function (e) {
    var key = e.key;
    if(key === 'Tab' && e.shiftKey){
      $(this).siblings("ul").css("display", "none");
      $(this).siblings("a").attr('aria-expanded', 'false');
    }
  });
  $('.menu-item--expanded > a').bindFirst('keydown', function (e) {
    var key = e.key;
    $trigger = $(this);
    if (key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      $trigger.siblings("ul").css("display", "block");
      $trigger.attr('aria-expanded', 'true');
    }else if( key === 'ArrowLeft'){
      e.preventDefault();
      e.stopPropagation();
      $trigger.attr('aria-expanded', 'false').focus();
      $trigger.siblings("ul").css("display", "none");
    }else if (key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      $trigger.attr('aria-expanded', 'false').focus();
      $trigger.siblings("ul").css("display", "none");
    }
  });
  $('a.dropdown-toggle').bindFirst('keydown', function (e) {
    var key = e.key;
    $trigger = $(this);
    if (key === 'ArrowDown') {
      e.preventDefault();
      e.stopPropagation();
      $trigger.siblings("ul").css("display", "block");
      $trigger.attr('aria-expanded', 'true');
    }else if( key === 'ArrowUp'){
      e.preventDefault();
      e.stopPropagation();
      $trigger.siblings("ul").css("display", "none");
      $trigger.attr('aria-expanded', 'false').focus();
    }else if (key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      $trigger.attr('aria-expanded', 'false').focus();
      $trigger.siblings("ul").css("display", "none");
    }
  });
})(jQuery, Drupal);
;
