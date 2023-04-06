/*window.onload = function(){

    console.log('carregou o dom')
    let title = document.querySelector('#title')
    console.log(title)
}-------------------------------------------------*/
/*var clica = document.querySelector("#clica")

console.log(clica)

clica.addEventListener("click", function(){
    console.log("clicou")
    this.style.color = "red"
})

var title = document.querySelector('#title')

title.addEventListener("click", function(){

    var subtitle = document.querySelector("#subtitle")

    subtitle.style.display = "none"

})

var subtitle = document.querySelector('#subtitle')

subtitle.addEventListener("dblclick", function(){
    console.log("click duplo")
})
---------------------------------------------------*/

/*var title = document.querySelector("#title")

title.addEventListener("mouseover",function(){

    title.style.backgroundColor ="yellow"
})

var title = document.querySelector("#title")

title.addEventListener("mouseout",function(){

    title.style.backgroundColor ="white"
})


var subtitle = document.querySelector("#subtitle")

subtitle.addEventListener("mouseover", function(){

    var hide = document.querySelector("#legenda")

    hide.classList.remove("hide" )
})
 
var subtitle = document.querySelector("#subtitle")

subtitle.addEventListener("mouseout", function(){

    var hide = document.querySelector("#legenda")

    hide.classList.add("hide" )
})------------------------------------------------*/
/*document.addEventListener("keydown", function(event){

    if(event.key ==="Enter") {
        console.log("Apertou Enter")
    }

})
document.addEventListener("keyup", function(event){

    if(event.key ==="Enter") {
        console.log("Soltou Enter")
    }

})*/
/*---------------------------------------------
var novotexto = document.createElement("p")
var texto = document.createTextNode("blablabla")
novotexto.appendChild(texto)
console.log(novotexto)

var body = document.querySelector("body")
body.appendChild(novotexto)*/

/*-------------------------------------------------
var testando  = document.querySelector("body")
var p =document.querySelector("body p")
testando.removeChild(p)
----------------------------------------------------*/

/*var el = document.createElement("div")
el.classList = "div-criada"
var texto = document.createTextNode('inserido div no body')
el.appendChild(texto)
var body = document.querySelector('body')
body.appendChild(el)

var el2 = document.createElement("div")
el2.classList = "div-criada-before"
var texto2 = document.createTextNode('div criada before')
el2.appendChild(texto2)

var el3 = document.querySelector("body .div-criada")



body.insertBefore(el2, el3)
----------------------------------------------------*/
/*var el = document.createElement('h3')
el.classList = "testandoclasse"
var texto = document.createTextNode('Mais um teste')
el.appendChild(texto)

var title = document.querySelector('#title')
var body = document.querySelector('body')
body.replaceChild(el, title)
---------------------------------------------------*/
 /* var p = document.querySelector('p')
  p.setAttribute('class', 'testando o set')

  var p = document.querySelector('p')
  p.removeAttribute('class')
  -------------------------------------------------*/

 /* let numeros = [1,2,3,4]
  let total = numeros.reduce(function(valorAcumulado, numeroAtual){

  return valorAcumulado + numeroAtual

  },0)
  console.log(total)
  -----------------------------------------------------------*/

  /*let numeros = [20, 70 , 35]
  let maiorValor = numeros.reduce(function(valorAcumulado, valorAtual){
    return Math.max(valorAcumulado, valorAtual)
  },0)
console.log(maiorValor)
-----------------------------------------------------*/
/*arrow function exemplo
let soma2 = (a,b) => a+b
console.log(soma2(2,4))
-----------------------------------------------------*/
/*let numeros = [4, 12, 45, 67, 83]

let numerosFiltrados = numeros.filter((valorAtual) =>{
    if(valorAtual >=10){
        return valorAtual
    }
})
console.log(numerosFiltrados)
---------------------------------------------------*/
/*let numeros = [1,3,5]
let numerosCalculados = numeros.map((valorAtual, indice, array) =>{
    return valorAtual*3
})
console.log(numerosCalculados)
---------------------------------------------------------*/

/*const myPromise = new Promise((resolve, reject) =>{
    const nome = 'felipe'

    if(nome ==='felipe'){
        resolve('Usuário encontrado')
    } else{
        reject('Usuário não encontrado')
    }
})
myPromise.then((data) =>{
    console.log(data)
})------------------------------------*/
/*const myPromise2 = new Promise((resolve, reject) =>{
    const nome = 'felipe'

    if(nome ==='felipe'){
        resolve('Usuário encontrado')
    } else{
        reject('Usuário não encontrado')
    }
})
myPromise2
.then((data) =>{
    return data.toLowerCase()
})
.then((stringmodificada) =>{
    console.log(stringmodificada)
}) ------------------------------------- */
/*const myPromise2 = new Promise((resolve, reject) =>{
    const nome = 'João'

    if(nome ==='felipe'){
        resolve('Usuário encontrado')
    } else{
        reject('Usuário não encontrado')
    }
})
myPromise2
.then((data) =>{
    console.log(data)
})
.catch((err) => {
    console.log('Aconteceu um erro: ' + err)
})---------------------------------*/
/*const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('P1 ok! Timeout')
    },2000)
})
const p2 = new Promise((resolve, reject) =>{
   
        resolve('P2')
    
})
const p3 = new Promise((resolve, reject) =>{
   
    resolve('P3')

})
const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
})-----------------------------------*/ 
/*const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('P1 ok! Timeout')
    },2000)
})
const p2 = new Promise((resolve, reject) =>{
   
        resolve('P2')
    
})
const p3 = new Promise((resolve, reject) =>{
   
    resolve('P3')

})
const resolveAll = Promise.race([p1,p2,p3]).then((data) => {
    console.log(data)
})-----------------------------------*/
/*function primeiraFuncao(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log('Esperou isso aqui!')
         resolve()   
        },3000)
    })
}
async function segundaFuncao(){
    console.log('Iniciou')
    await primeiraFuncao()
    console.log('Terminou')
}
segundaFuncao()
-------------------------------*/
/*function bestRockBand(band) {
    return new Promise ((resolve, reject)=>{
        if(band =='Queen'){
            resolve({
                success: true,
                bandName: band,
                msg: band +'is the baest band ever'
            })
        } else{
            reject({
                success: false,
                msg: 'Iam not so sure!'
            })
        }

    })
}

function bestRockSong(response){
    return new Promise((resolve, reject) => {
        if(response.success){
            resolve('Love of my life by' + response.bandName) } else{
                reject('Do you know Queen?')
            }
        })
    }*/   
/*bestRockBand('Queen')
.then(response => {
console.log('Checking the answer...')
return bestRockSong(response)
})
.then(response =>{
console.log('Finding the best song...')
console.log(response)
})
.catch(err =>{
    console.log(err.msg)
})*/
/*async function doTheJob(){
    try{
        const bestRockBandResponse = await bestRockBand('Queen')
        console.log(bestRockBandResponse)
        const bestRockSongResponse = await bestRockSong(bestRockBandResponse)
        console.log(bestRockSongResponse)
    } catch (err){
        console.log(err.msg)
    }
}
doTheJob()*/


/*// This example takes 2 seconds to run
const start = Date.now();

console.log('starting timer...');
// Expected output: "starting timer..."

setTimeout(() => {
  const millis = Date.now();

  console.log(`seconds elapsed = ${Math.floor(millis)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000);*/
