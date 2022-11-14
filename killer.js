class killer {
  constructor(nom, hp) {
      this.nom = nom;
      this.hp = hp;
  }
}

let jason = new killer('jason', 100)

class survivant {
  constructor(nom, carac) {
      this.nom = nom;
      this.carac = carac;
  }
}

let nam = ["Jane", "Tom", "Bob", "Alice", "John", "Mia", "Sara", "Lily", "Jack", "Mary", "Kate", "David", "Linda", "Mike", "Lisa", "Peter", "Susan", "Robert", "Julia", "Kevin", "Karen", "Chris", "Laura", "William", "Helen", "Richard", "Anna", "Charles", "Nancy", "George", "Margaret", "Frank", "Betty", "Thomas", "Dorothy", "Henry", "Sandra", "Joseph", "Ashley", "Harold", "Kimberly", "Edward", "Donna", "Joshua", "Emily", "Ronald", "Carol", "Stephen", "Michelle", "Andrew", "Amanda", "Kenneth", "Melissa", "Daniel", "Deborah", "Anthony", "Stephanie", "Paul", "Rebecca", "Mark", "Laura", "Donald", "Sharon", "Steven", "Cynthia", "George", "Kathleen", "Kenneth", "Amy", "Edward", "Shirley", "Brian", "Angela", "Ronald", "Helen", "Timothy", "Anna", "Jason", "Brenda", "Jeffrey", "Pamela", "Ryan", "Nicole", "Jacob", "Ruth", "Gary", "Katherine", "Nicholas", "Samantha", "Eric", "Christine", "Jonathan", "Catherine", "Stephen", "Virginia", "Larry", "Debra", "Justin", "Rachel", "Scott", "Janet", "Brandon", "Emma", "Benjamin", "Carolyn", "Samuel", "Maria", "Frank", "Heather", "Gregory", "Diane", "Raymond", "Julie", "Alexander", "Joyce", "Patrick", "Evelyn", "Jack", "Joan", "Dennis", "Victoria", "Jerry", "Kelly", "Tyler", "Christina", "Aaron", "Lauren", "Jose", "Frances", "Henry", "Martha", "Adam", "Judith", "Douglas", "Cheryl", "Nathan", "Megan", "Peter", "Andrea", "Zachary", "Olivia", "Kyle", "Ann"]

class carac {
  constructor(nom, pm, pf, pk){
      this.nom = nom;
      this.pm = pm;
      this.pf = pf;
      this.pk = pk;
  }
}
// balanced pool
let nerd = new carac('nerd', 0.3, 0.2, 0.5)
let sportif = new carac('sportif', 0.2, 0.5, 0.3)
let blonde = new carac('blonde', 0.5, 0.3, 0.2)
let random = new carac('random', 0.35, 0.3, 0.35)
let naviseal = new carac('naviseal', 0.1, 0.65, 0.25)
let jock = new carac('jock', 0.4, 0.4, 0.2)
let kamikaze = new carac('kamikaze', 0.05, 0.05, 0.9)
let john_wick = new carac('john_wick', 0.01, 0.98, 0.01)

// unbalanced pool with the US militaries
// let nerd = new carac('militaire', 0.1, 0.65, 0.25)
// let sportif = new carac('militaire', 0.1, 0.65, 0.25)
// let blonde = new carac('militaire', 0.1, 0.65, 0.25)
// let random = new carac('militaire', 0.1, 0.65, 0.25)
// let naviseal = new carac('naviseal', 0.1, 0.65, 0.25)
// let jock = new carac('militaire', 0.1, 0.65, 0.25)
// let kamikaze = new carac('kamikaze', 0.05, 0.05, 0.9)
// let john_wick = new carac('john_wick', 0.01, 0.98, 0.01)

let survivants = []

for(let i = 0; i < 5; i++){
  let randomName = nam[Math.floor(Math.random()*nam.length)]
  // let randomCarac = [naviseal]
  let randomCarac = [nerd, nerd, sportif, sportif, blonde, blonde, random, random, naviseal, jock, kamikaze, john_wick][Math.floor(Math.random()*7)]
  let randomSurvivants = new survivant(randomName, randomCarac)
  survivants.push(randomSurvivants)
}
console.log(survivants)
while(true){
  let chalenger = survivants[Math.floor(Math.random()*survivants.length)]
  jasonluck = Math.random()
  
  if (jasonluck <= chalenger.carac.pm){

    console.log(chalenger.nom + ' est mort')
    survivants.splice(survivants.indexOf(chalenger), 1)

  } else if (jasonluck <= chalenger.carac.pm + chalenger.carac.pf){

    jason.hp = jason.hp - 10
    console.log('Jason a subit des dégats a cause de ' + chalenger.nom)

  } else {

    jason.hp = jason.hp - 15
    console.log(chalenger.nom + ' a réussi a blesser jason avant de mourir' )
    survivants.splice(survivants.indexOf(chalenger), 1)

  }

  if (jason.hp <= 0){
    console.log('jason est mort...' + ' ' + 'Les survivants ont gagné !!!')
    console.log('Les survivants sont : ' + survivants.map(survivants => survivants.nom))
    break
  } 
  if (survivants.length == 0){
    console.log('jason a tuer tout les survivant et a encore ' + jason.hp + ' points de vie')
    break
  }
}




