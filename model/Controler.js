"use strict";
exports.__esModule = true;
exports.Controler = void 0;
var Controler = /** @class */ (function () {
    function Controler() {
    }
    //To Check
    Controler.prototype.getVilles = function () {
        return { villes: this.villes.forEach(function (element) {
                return element.toJSON();
            }) };
    };
    Controler.prototype.addVille = function (ville) {
        this.villes.push(ville);
    };
    Controler.prototype.getSessions = function () {
        return { sessions: this.sessions.forEach(function (element) {
                return element; //.toJSON();
            }) };
    };
    Controler.prototype.addSession = function (session) {
        this.sessions.push(session);
    };
    return Controler;
}());
exports.Controler = Controler;
