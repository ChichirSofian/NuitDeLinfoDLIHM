

export class Session {
    constructor(timeStamp1,timeStamp2){
        this.timeStamp1 = timeStamp1;
        this.timeStamp2 = timeStamp2;
    }
    //TODO traiter les timestamps
    toJSON(){
        return {
          name : this.name,
          codeZip : this.codeZip
        }
    }
}
$