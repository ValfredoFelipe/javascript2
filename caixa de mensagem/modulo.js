import { Cxmsg } from "./caixamsg.js"

const config={
   
cor:"#48f"

}

Cxmsg.config (config)

const btn_mostrarcxmsg=document.querySelector("#btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.querySelector("#btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.querySelector("#btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{

Cxmsg.mostrar("teste1","teste111")  
})
btn_mostrarcxmsg2.addEventListener("click",()=>{

Cxmsg.mostrar("teste2","teste222")  
})
btn_mostrarcxmsg3.addEventListener("click",()=>{

Cxmsg.mostrar("teste3","teste")  
})