import { Session } from "./Session";
import { Ville } from "./Ville";

export class Controler {

    villes:Array<Ville>;
    sessions:Array<Session>;

    constructor(){

    }
    //To Check
    getVilles(){
        return {villes: this.villes.forEach(element => {
            return element.toJSON();
        })};
    }

    addVille(ville:Ville){
        this.villes.push(ville);
    }

    getSessions(){
        return {sessions: this.sessions.forEach(element => {
            return element;//.toJSON();
        })};
    }


    addSession(session:Session){
        this.sessions.push(session)
    }


}