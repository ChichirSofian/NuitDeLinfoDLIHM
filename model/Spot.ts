import { Ville } from "./Ville";


export class Spot {

    name:String;
    city:Ville;
    nbSwimmer:Number;
    nbNautic:Number;
    nbShipFisher:Number;
    nbShipEntertainement:Number;
    nbShipSails:Number;
    value:String;
    waterState:Number;

    
    constructor(name:String, city:Ville){
        this.name = name;
        this.city = city;
        this.value = name+" "+city.name;
    }

    setInfo(nbSwimmer:Number, nbNautic:Number, nbShipFisher:Number, nbShipEntertainement:Number, nbShipSails:Number, waterState:Number){
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