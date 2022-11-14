let main = document.querySelector('main');
for(let i = 0; i < 21; i++){
    let div = document.createElement('div')
    main.appendChild(div)
}

let divs = document.querySelectorAll('div')
for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', function(){
        if(this.style.backgroundColor == 'green'){
            this.style.backgroundColor = 'black'
        }else{
            this.style.backgroundColor = 'green'
        }
    })
}

console.log(divs.length)
let joueur = document.querySelector('h1')
joueur.textContent = 'tour du joueur 1'
let button = document.querySelector('button')   

button.addEventListener('click', function(){
    let divs = document.querySelectorAll('div')
    let count = 0
    for(let i = 0; i < divs.length; i++){
        if(divs[i].style.backgroundColor == 'green'){
            count++
        }
    }
    if(count >= 1 && count <= 3){
        for(let i = 0; i < divs.length; i++){
            if(divs[i].style.backgroundColor == 'green'){
                divs[i].remove()
            }
        }
        let alldivs = document.querySelectorAll('div')
        let allcont = 0
        for(let i = 0; i < alldivs.length; i++){
            allcont++
        }
        if (allcont == 0){
            if (joueur.textContent == 'tour du joueur 1'){
                alert ('le joueur 2 a gagné')}
                else{
                    alert ('le joueur 1 a gagné')
                } 
        }else{
        if (joueur.textContent == 'tour du joueur 1'){
            joueur.textContent = 'tour du joueur 2'}
        else{
            joueur.textContent = 'tour du joueur 1'
        }
        }
    } else {
        alert('il faut entre 1 et 3 divs vertes')
    }
})




