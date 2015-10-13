(function(root) {
  'use strict';

  function hanoi(n) {
    if (n instanceof Number) {
      n = (+n);
    }

    if (!((typeof n === 'number') && n > 0)) {
      return 0;
    }

    if (n >= Infinity) {
      return Infinity;
    }

    return n === 1 ? 1 : 2 * hanoi(n - 1) + 1;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = hanoi;
    }
    exports.hanoi = hanoi;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return hanoi;
    });
  } else {
    root.hanoi = hanoi;
  }

})(this);
