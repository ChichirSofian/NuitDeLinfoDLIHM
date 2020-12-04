

export class Ville {
    name:String;
    codeZip:String;

    constructor(name:String, codeZip:String){
        this.name = name;
        this.codeZip = codeZip;
    }

    toJSON(){
        return {
          name : this.name,
          codeZip : this.codeZip
        }
    }
}