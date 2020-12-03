import { Spot } from "./Spot";


export class Session {
    timeStamp1:Date;
    timeStamp2:Date;
    spot:Spot;
    args:any;

    constructor(timeStamps1:Date,timeStamp2:Date, spot:Spot , ...args:any){
        this.timeStamp1 = timeStamps1;
        this.timeStamp2 = timeStamp2;
        if (spot instanceof Spot){
            this.spot = spot;
        }
        this.args = args;
    }

}