(function ($) {
  module('jQuery#verticalRl', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.verticalRl(), this.elems, 'should be chainable');
  });

  test('is verticalRl', function () {
    expect(1);
    strictEqual(this.elems.verticalRl().text(), 'verticalRl0verticalRl1verticalRl2', 'should be verticalRl');
  });

}(jQuery));
