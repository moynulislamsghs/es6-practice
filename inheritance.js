class Parents{
    constructor(){
        this.familyName = "Biswas";
    }
}
class Children extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return (`${this.name} ${this.familyName}`)
    }
}
const father = new Children("Aynuddin");
console.log(father.getFullName());