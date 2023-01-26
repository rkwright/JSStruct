var ModuleA = (function () {

    // @constructor
    ModuleA = function () {
        this.zot = 42;
    };

    // @prototupe
    ModuleA.prototype = {
        // constants
       REVISION: 1.1,

        // the struct's methods
        getTruth: function () {

            return false;
        }
    }
    return ModuleA;
})();