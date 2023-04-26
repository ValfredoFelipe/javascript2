
import { Cxmsg } from "../caixa de mensagem/caixamsg.js"
import {login} from "./login.js"


const callback_ok=()=>{
   
}
const callback_naook=()=>{
    // const mostrar={
    //     titulo: "teste",
    //     texto:null
    // }
    Cxmsg.mostrar("mensagem","usuário incorreto")
    //this.titulo=titulo
    //this.texto=texto
}
const config ={
    cor:null,
    endpoint:"https://loginv1.cfbcursos.repl.co"

}

login.login(callback_ok,callback_naook,config)