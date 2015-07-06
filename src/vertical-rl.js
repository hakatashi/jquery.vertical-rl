/*
 * 
 * 
 *
 * Copyright (c) 2015 Koki Takahashi
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.verticalRl = function () {
    return this.each(function (i) {
      // Do something to each selected element.
      $(this).html('verticalRl' + i);
    });
  };
}(jQuery));
