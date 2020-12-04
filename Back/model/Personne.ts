import { Session } from "./Session";

export class Personne{

    username:String;
    sessions:Array<Session>;

    constructor(username : String,sessions:Array<Session>){
        this.username = username;
        this.sessions = sessions;
    }

    addSession (session:Session){
        this.sessions.push(session); 
    }

}