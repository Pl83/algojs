let a =3
let b =4
let somme = addition(a, b)

function addition(number1, number2){
    return number1 + number2
}

console.log(somme)


let c = 'jean'
let d = 'paul'
let result = comparateur(c, d)

function comparateur(nom1, nom2){
    if (nom1 !== nom2){
        return 'nom différent'
    } else {
        return 'nom identique'
    }
}

console.log(result)
