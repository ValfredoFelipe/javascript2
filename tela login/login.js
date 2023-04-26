
class login{
    static mat=null
    static pas=null
    static logado=false
    static matlogado=null
    static nomelogado=null
    static acessologado=null
    static estilocss=null
    static callback_ok=null
    static callback_naook=null
    static config={
    cor:"lightblue"
    }

    static endpoint="https://loginv1.cfbcursos.repl.co/";
    //https://loginv1.cfbcursos.repl.co/?matricula=123&senha=321
    

    static login=(callback_ok, callback_naook, config=null)=>{
        
            if(config!=null){
                this.config=config
            }
        this.callback_ok=()=>{callback_ok()}
        this.callback_naook=()=>{callback_naook()}
        this.estilocss=
        ".fundoLogin{display:flex; justify-content: flex-start;align-items: flex-start; flex-direction: column; width: 50%}"+
        ".baseLogin{{display:flex; justify-content: flex-start;align-items: stretch; flex-direction: column; width: 50%}"+
        ".elementosLogin {display:flex; justify-content: flex-start;align-items: flex-start; flex-direction: column; width: 50%}"+  
        ".campoLogin{{display:flex; justify-content: flex-start;align-items: flex-start; flex-direction: column; width: 50%}"+
        ".campoLogin label{font-size:18px}"+
        ".botoesLogin{display:flex; justify-content: flex-start;align-items: flex-start; flex-direction: column; width: 50%}" 
        const styleEstilo=document.createElement("style")
        styleEstilo.setAttribute('id','id_estiloLogin')
        styleEstilo.setAttribute('rel','stylesheet')
        styleEstilo.setAttribute('type','text/css')
        styleEstilo.innerHTML=this.estilocss;
        document.head.appendChild(styleEstilo)
        
       const fundoLogin=document.createElement('div')
       fundoLogin.setAttribute('id','fundoLogin')
       fundoLogin.setAttribute('class','baseLogin')
       document.body.prepend(fundoLogin)

       const baseLogin=document.createElement("div")
       baseLogin.setAttribute('id','baseLogin')
       baseLogin.setAttribute('class','baseLogin')
       fundoLogin.appendChild(baseLogin)

       const elementosLogin=document.createElement('div')
       elementosLogin.setAttribute('id','elementosLogin')
       elementosLogin.setAttribute('class','elementosLogin')
       baseLogin.appendChild(elementosLogin)

       const campoLoginUsername=document.createElement("div")
       campoLoginUsername.setAttribute('id','campoLoginUsername')
       campoLoginUsername.setAttribute('class','campoLoginUsername')
       elementosLogin.appendChild(campoLoginUsername)

       const labelUsername=document.createElement("label")
       labelUsername.setAttribute('id','labelUsername')
       labelUsername.innerHTML="Username"
       campoLoginUsername.appendChild(labelUsername)

       const inputUsername=document.createElement("input")
       inputUsername.setAttribute('id','f_userName')
       inputUsername.setAttribute('name','f_userName')
       inputUsername.setAttribute('type','text')
       campoLoginUsername.appendChild(inputUsername)

       const campoLoginSenha=document.createElement("div")
       campoLoginSenha.setAttribute('id','campoLoginSenha')
       campoLoginSenha.setAttribute('class','campoLoginSenha')
       elementosLogin.appendChild(campoLoginSenha)

       const labelSenha=document.createElement("label")
       labelSenha.setAttribute('id','labelSenha')
       labelSenha.innerHTML="Senha"
       campoLoginSenha.appendChild(labelSenha)

       const inputSenha=document.createElement("input")
       inputSenha.setAttribute('id','f_senha')
       inputSenha.setAttribute('name','f_senha')
       inputSenha.setAttribute('type','password')
       campoLoginSenha.appendChild(inputSenha)

       const botoesLogin =document.createElement('div')
       botoesLogin.setAttribute('class','botoesLogin')
       elementosLogin.appendChild(botoesLogin)


       const btn_login=document.createElement('button')
       btn_login.setAttribute('id','btn_login')
       btn_login.innerHTML='Login'
       btn_login.addEventListener("click", (evt)=>{
        this.verificarLogin()
        
       })
       elementosLogin.appendChild(btn_login)

       const btn_cancelar=document.createElement('button')
       btn_cancelar.setAttribute('id','btn_cancelar')
       btn_cancelar.innerHTML='Cancelar'
       btn_cancelar.addEventListener("click",(evt)=>{
        this.fechar()
       })
       elementosLogin.appendChild(btn_cancelar)








    



//        <div id="fundoLogin" class="fundoLogin">
//        <div id="baseLogin" class="baseLogin">
           
//                <div id="elementosLogin" class="elementosLogin">
//                    <div class="campoLogin">
//                        <label >Username</label>
//                        <input type="text" name="f_username" id="f_username">
                       
//                    </div>
//                    <div class="campoLogin">
//                        <label >Senha</label>
//                        <input type="password" name="f_senha" id="f_senha">
                   
//                    </div>
//                    <div class="botoesLogin">
//                        <button class="brn_login">Login</button>
//                        <button id="btn_cancelar">Cancelar</button>
                       
//                    </div>
//                    <div id="logoLogin" class="logoLogin">
//                        <img src="#" alt="CFBcursos">
//                    </div>

//                </div>

           

//        </div>

//    </div>  

    }

    static verificarLogin=()=>{
        const mat=document.querySelector("#f_userName").value
        let pas=document.querySelector("#f_senha").value
        
        const endpoint =`https://loginv1.cfbcursos.repl.co/?matricula=${mat}&senha=${pas}`
       fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
              if(res){
                this.logado=true
                this.matlogado=mat
                this.nomelogado=res.nome
                this.acessologado=res.acesso
                this.callback_ok()
                this.fechar()
            } else{
                this.logado=false
                this.matlogado=null
                this.nomelogado=null
                this.acessologado=null
                this.callback_naook()
                
            }
        })
    }
    static fechar=()=>{
        const id_estiloLogin=document.querySelector("#id_estiloLogin")
        id_estiloLogin.remove()
        const fundoLogin=document.querySelector("#fundoLogin")
        fundoLogin.remove()
    }
}

export {login}