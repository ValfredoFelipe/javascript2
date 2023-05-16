const cabecalho =document.querySelector('#cabecalho')
const menu =document.querySelector('#menu')
const btn_home =document.querySelector('#btn_home')
const btn_novo =document.querySelector('#btn_novo')
const btn_pesquisar =document.querySelector('#btn_pesquisar')
const btn_gestao =document.querySelector('#btn_gestao')
const btn_sobre =document.querySelector('#btn_sobre')
const principal =document.querySelector('#principal')

btn_home.addEventListener("click", (e)=>{
    
    selecionarAba(e.target,'./home.html' )
   
})
btn_novo.addEventListener("click", (e)=>{
    selecionarAba(e.target, './novo.html' )
    
})
btn_pesquisar.addEventListener("click", (e)=>{
    selecionarAba(e.target, './pesquisar.html')
   
})
btn_sobre.addEventListener("click", (e)=>{
    selecionarAba(e.target, './sobre.html')
    
})
btn_gestao.addEventListener("click", (e)=>{
    selecionarAba(e.target, './gestao.html' )
   
})

const selecionarAba=(el, url)=>{
    const abas =[...document.querySelectorAll('.aba')]
    
    abas.forEach(e => {
        e.classList.remove('abaselecionada')
        
    });
    el.classList.add('abaselecionada')
    window.open(url,"if_principal")
}