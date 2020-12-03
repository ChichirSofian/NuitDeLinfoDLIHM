

export class Ville {
    constructor(name, codeZip){
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
$