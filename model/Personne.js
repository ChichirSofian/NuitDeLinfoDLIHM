"use strict";
exports.__esModule = true;
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(username, sessions) {
        this.username = username;
        this.sessions = sessions;
    }
    Personne.prototype.addSession = function (session) {
        this.sessions.push(session);
    };
    return Personne;
}());
exports.Personne = Personne;
