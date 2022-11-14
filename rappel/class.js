/* class warior {
    constructor(atk, def) {
        this.atk = atk;
        this.def = def;
    }

    getAtk() {
        console.log(this.atk);
    }
}

let Alexis = new warior(10,5);
Alexis.getAtk();

let thomas = new warior(15,20);
thomas.getAtk(); */


class pokemon {
    constructor(name, atk, def, hp) {
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.hp = hp;
    }
}

let Clamiral = new pokemon('Clamiral', 130, 85, 220);
let Amphinobie = new pokemon('Amphinobie', 145, 70, 210);

console.log(Clamiral)
console.log(Amphinobie)

let damage = attackPokemon(Clamiral.atk, Amphinobie.def)

function attackPokemon (atk, def){
    return atk - def
}

console.log(damage)

