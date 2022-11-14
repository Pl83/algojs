
class passager {
    constructor(nom, sanity) {
        this.nom = nom;
        this.sanity = sanity;
    }
}

let pl = new passager('pl', 10)

let playlist = ['musique1', 'musique2', 'musique3', 'annisa - Wejdene', 'muisique5']

let nbtaxis = 1

for(let f =30; f != 0; f--){
    let curentMusique = playlist[Math.floor(Math.random()*playlist.length)]
    if (curentMusique === 'annisa - Wejdene'){
        pl.sanity = pl.sanity -1
        if (pl.sanity <= 0){
            console.log('pl comited sepuku')
            break
        } else {
            console.log('ahahahhahaha...')
            console.log(pl.nom + ' a changer de taxis et a plus que ' + pl.sanity + 'pts de santée mental')
            nbtaxis = nbtaxis +1
        }
    } else {
        console.log('plus que ' + f + ' feu rouge')
    }
}
console.log('pl a pris ' + nbtaxis + ' taxis' + 'et il lui reste ' + pl.sanity + 'pts de santer mental' );