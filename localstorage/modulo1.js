const f_texto=document.querySelector('#f_texto')
const p_texto=document.querySelector('#p_texto')
const btn_texto=document.querySelector('#btn_texto')
const btn_logout=document.querySelector('#btn_logout')

btn_texto.addEventListener("click",(evt)=>{

    const valor =document.querySelector("#f_texto")
    const propriedade= "nome"
    localStorage.setItem(propriedade, valor.value)
    valor.value =""


})
/*let num=10
localStorage.setItem("numero",num)
localStorage.getItem('numero')
//alert(localStorage.getItem("numero"))
localStorage.clear()

sessionStorage.setItem('numero','12')
sessionStorage.clear()*/

/*const dados = {
    nome: "felipe",
    idade:"36",
    altura:"1,72",

}
localStorage.setItem("dados",JSON.stringify(dados))


const getDados =localStorage.getItem("dados")

console.log(getDados)

const dadosObject = JSON.parse(getDados)

console.log(typeof dadosObject)*/