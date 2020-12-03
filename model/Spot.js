import { Ville } from "./Ville";


export class Spot {
    constructor(name, city, nbSwimmer, nbNautic, nbShipFisher, nbShipEntertainement, nbShipSails ){
        this.name = name;
        if (city instanceof Ville){
            this.city = city;
        }
        this.nbSwimmer = nbSwimmer;
        this.nbNautic = nbNautic;
        this.nbShipFisher = nbShipFisher;
        this.nbShipEntertainement = nbShipEntertainement;
        this.nbShipSails = nbShipSails;
        
    }

    toJSON(){
        return {
            name : this.name,
            city : this.city,
            nbSwimmer : this.nbSwimmer,
            nbNautic : this.nbNautic,
            nbShipFisher : this.nbShipFisher,
            nbShipEntertainement : this.nbShipEntertainement,
            nbShipSails : this.nbShipSails
        }
    }
}
$