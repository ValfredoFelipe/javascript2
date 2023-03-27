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

