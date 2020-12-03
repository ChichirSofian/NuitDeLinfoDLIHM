class Personne{
  
  
  constructor(name,surname){
    this.name = name;
    this.surname = surname;
  }

  toJSON(){
    return {
      name : this.name,
      surname : this.surname
    }
  }

}


const p = new Personne("pierre","durif");

console.log(JSON.stringify(p.toJSON()));