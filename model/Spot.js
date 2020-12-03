"use strict";
exports.__esModule = true;
var Spot = /** @class */ (function () {
    function Spot(name, city, nbSwimmer, nbNautic, nbShipFisher, nbShipEntertainement, nbShipSails) {
        this.name = name;
        this.city = city;
        this.nbSwimmer = nbSwimmer;
        this.nbNautic = nbNautic;
        this.nbShipFisher = nbShipFisher;
        this.nbShipEntertainement = nbShipEntertainement;
        this.nbShipSails = nbShipSails;
    }
    Spot.prototype.toJSON = function () {
        return {
            name: this.name,
            city: this.city,
            nbSwimmer: this.nbSwimmer,
            nbNautic: this.nbNautic,
            nbShipFisher: this.nbShipFisher,
            nbShipEntertainement: this.nbShipEntertainement,
            nbShipSails: this.nbShipSails
        };
    };
    return Spot;
}());
exports.Spot = Spot;
