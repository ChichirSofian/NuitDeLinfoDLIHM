"use strict";
exports.__esModule = true;
exports.Session = void 0;
var Spot_1 = require("./Spot");
var Session = /** @class */ (function () {
    function Session(timeStamps1, timeStamp2, spot) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        this.timeStamp1 = timeStamps1;
        this.timeStamp2 = timeStamp2;
        if (spot instanceof Spot_1.Spot) {
            this.spot = spot;
        }
        this.args = args;
    }
    return Session;
}());
exports.Session = Session;
