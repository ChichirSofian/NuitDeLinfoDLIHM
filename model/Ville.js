"use strict";
exports.__esModule = true;
exports.Ville = void 0;
var Ville = /** @class */ (function () {
    function Ville(name, codeZip) {
        this.name = name;
        this.codeZip = codeZip;
    }
    Ville.prototype.toJSON = function () {
        return {
            name: this.name,
            codeZip: this.codeZip
        };
    };
    return Ville;
}());
exports.Ville = Ville;
