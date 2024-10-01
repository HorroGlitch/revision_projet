
// sessionStorage.setItem('couleur', 'vert')
// let couleur = sessionStorage.getItem('couleur')

// console.log(couleur)

// sessionStorage.getItem('couleur', 'noir')

// sessionStorage.clear('couleur')


// let view = 1
// if (localStorage.nbrView) {
//     view = parseInt(localStorage.nbrView)
//     view++
// } else {
//     localStorage.setItem("nbrView", view)
// }

// localStorage.nbrView = parseInt(view)

// let textCount = document.getElementById("textCount").textContent = "Vous avez vu cette page " + view + " fois"



// console.log(localStorage)




//4.5

// let sexe = prompt("Homme ou Femme?")

// let age = prompt("L'age?")


// if (sexe === "Femme") {
//     if (age >= 18 && age <= 35 ) {
//         console.log("Impôts")
//     }
// } else if (age > 20) {
//     console.log("Impôts homme");
    
// }



// // 4.6

// let candidat1 = 15
// let candidat2 = 5
// let candidat3 = 20
// let candidat4 = 60


// if (candidat1 > 50) {
//     console.log("élu")
// } else if () {

// }


// function factorielle(nbr){
//     let result = 1
//     for (let i = 2; i <= nbr; i++) {
//         result *= i
        
//     }
//     // console.log(result)
//     return result

// }



// function euroMillion(){
//     let n = 50
//     let p = 5

//     let chanceFirst = factorielle(n) /  (factorielle(p) * (factorielle(n - p)))

//     n = 12
//     p = 2

//     let chanceSecond  = factorielle(n) / (factorielle(p) * (factorielle(n - p)))

//     let totalChance = chanceFirst * chanceSecond
//     console.log(totalChance)
//     return totalChance
// }
// euroMillion()



// function achat() {

//     let prixTotal = 0
//     let coutArticle = 0

//     do{
//         coutArticle = prompt("Coût de l'article")
//         prixTotal += parseInt(coutArticle)
//     } while(coutArticle > 0)

//     let payer = prompt("Combien paye-tu?")
//     while (payer < prixTotal) {
//         payer = prompt("Combien paye-tu?")
//     }

//     console.log("Le prix total de mon panier est " + prixTotal)

//     console.log("J'ai payé " + payer)

//     let rendu = payer - prixTotal

//     while(rendu > 0){

//         if (rendu > 10) {
//             console.log("10 euros")
//             rendu -= 10
//         } else if (rendu >= 5){
//             console.log("5 euros")
//             rendu -= 5
//         } else if (rendu > 0){
//             console.log("1 euro")
//             rendu -= 1
//         }
//     }

// }

// achat()



// let tab1 = [4,8,7,12]
// let tab2 = [3,6]
// let result = 0

// for (let i = 0; i < tab2.length; i++) {
//     for (let j = 0; j < tab1.length; j++) {
        
//         result += (tab2[i] * tab1[j])
//     }
    
// }
// console.log(result)



// let notes = prompt("Quel note?")
// let notesList = []

// let moyenne = 0

// while(notes > 0){
//     notesList.push(notes)
//     notes = prompt("Quel note?")
// }

// for (let i = 0; i < notesList.length; i++) {
     
//     moyenne += parseInt(notesList[i])
// }
// moyenne = moyenne / notesList.length


// let countAuDessus = 0
// for (let j = 0; j < notesList.length; j++) {
//     if (notesList[j] > moyenne) {
//         countAuDessus ++
//     }
    
// }

// console.log(moyenne)
// console.log(countAuDessus)

// let prixTotal = 0

// let panier = [
//     one = {
//         name : "coca",
//         quantity : 3,
//         price : 0.90
//     },
//     two = {
//         name : "beer",
//         quantity : 4,
//         price : 5
//     },
//     three = {
//         name : "wisky",
//         quantity : 2,
//         price : 15
//     }
// ]
//    for (let i = 0; i < panier.length; i++) {
//         prixTotal += panier[i].price * panier[i].quantity
    
//    }

// console.log(panier, prixTotal)


// function pluriel(){
//     let mot = prompt("Donne-moi un mot")
    
//     let exceptions = ["s", "x"]

//     if (mot.endsWith()) {
        
//     }
//     mot += "s"
// }

// let nbr1 = prompt("Donne-moi un nombre")
// let nbr2 = prompt("Donne-moi un autre nombre")
// let operateur = prompt("Donne-moi un opérateur")

// function calculatrice(nbr1, nbr2, operateur) {
//     let result = eval(nbr1 + operateur + nbr2)
//     console.log(result)

// }
// calculatrice(nbr1, nbr2, operateur)

//     let argent = prompt("Combien d'argent?")
//     let nbrAnnee = prompt("Sur combien d'anées?")
//     let interet = prompt("L'intérêt?")
//     let prixTotal = 0

// function emprunt(argent, nbrAnnee, interet, prixTotal){
    
//     if (nbrAnnee = 0) {
//         console.log(prixTotal)
//         return prixTotal
//     } else {
//         prixTotal += argent * (interet / 100)
//         nbrAnnee - 1
//         emprunt(prixTotal)
//     }
    
// }


// for (variable in document) {
//     console.log(variable)
//     console.log(document[variable])

// }


// function replacePoint(nbr) {
 
//         console.log(nbr.replace('.', ','))
//         alert(nbr)

    
// }
// replacePoint("2.6")


// function extention(str){
//     console.log('.' + str.split(".").pop());
// }
// extention("www.google.com")


// function verifDate(date){
//     '.' + str.split("/").pop()
// }
// date(prompt("Donne-moi une date"))



// function dansNjours(nbrJours){

//     let actualDate = new Date('30 Septembre, 2024')

//     let nextDate = actualDate.setDate(nbrJours)

//     console.log(nextDate.getDay())
//     console.log(nextDate.getMonth())
//     console.log(nextDate.getYear())

// }
// dansNjours(prompt("Donne-moi un nombre de jours"))


// function verif(date) {
//     date = RegExp^("[0-9]{2}\/[0-9]{2}\/[0-3000]{4}")
//     if (date === (/^((((0[1-9])|([1-2][0-9]))\/((0[1-9])|(1[0-2])))|(31\/(01|03|05|07|08|10|12))|(30\/(01|03|04|05|06|07|08|09|10|11|12)))\/[0-9][0-9][0-9][0-9]$/g)) {
//        console.log(true)
//     }
    
    
// }
// verif(prompt("Donne-moi une date"))

// let timer = document.getElementById("#timer")

// let start = document.getElementById("#start")
// let stop = document.getElementById("#stop")
// let clear = document.getElementById("#clear")
// let memory = document.getElementById("#memory")
// let callBack = document.getElementById("#callBack")



// function getTheTime() {
    
// }
// getTheTime(setInterval(() => {
    
// }, 100))



// let time = setInterval(() => {
//     console.log(time)
// }, 1000);
// timer.textContent = time


// function scookie(name,value,days){
//     let expire=new Date();
//     expire.setDate(expire.getDate()+days);
//     document.cookie=name+'='+escape(value)+';expires='+expire.toGMTString();
//     }
//     scookie("Laélaiian", 0, 10)



// let menu1 = document.querySelector("menu1").classList.add("divUnfocused")
// let menu2 = document.querySelector("menu2")
// let menu3 = document.querySelector("menu3")

let monTexte = document.querySelector("#monTexte")

let password = document.querySelector("#monPassword")

let caseCoche = document.querySelector("#caseCoche")

let bouton1 = document.querySelector("#bouton1")
let bouton2 = document.querySelector("#bouton2")
let bouton3 = document.querySelector("#bouton3")

let chosseMultiple = document.querySelector("#choisi")

let textArea = document.querySelector("#commentaire")

let alertButton = document.querySelector("#alertButton")

console.log(alertButton)

alertButton.addEventListener("click", ()=>{

    monTexte = monTexte.value
    password = password.value
    
    if (caseCoche.value === checked) {
        caseCoche = caseCoche.value
    } else {
        caseCoche = "non cochée"
    }


    alert(
        "Mon texte : " + monTexte +
        " Password : " + password +
        " case à cochée : " + caseCoche
    )
})