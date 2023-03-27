let inserir = document.querySelector('#botao')

   inserir.addEventListener("click", function (){

      let tarefa= document.querySelector('#tarefaprincipal').value
      if(tarefa){

         const secundaria = document.querySelector('.secundaria')
        


         let tarefa_clone = secundaria.cloneNode(true) 

         

         tarefa_clone.classList.remove("hide")

         tarefa_clone.querySelector("#tarefasecundaria").value = tarefa 

         
         let resultado = document.querySelector('#resultado')
         
         resultado.appendChild(tarefa_clone)

         let excluir = tarefa_clone.querySelector('.bexcluir')

         

         excluir.addEventListener("click", function (){
            
         
            removetask(this)
   
   
   
         })
         function removetask(task){
         task.parentNode.remove(true)
        }


      
      console.log(tarefa_clone)
      }


     
      
     
    
      
   })



      
      
      
      
      
      /*let divsecundaria= document.querySelector('#secundaria')
      let tarefa= document.querySelector('#principal')
      let tarefa_clone = tarefa.cloneNode(true)
      let resultado = document.querySelector('#resultado')
      resultado.innerHTML = `${tarefa_clone}`
      //divsecundaria.appendChild(tarefa_clone)*/
      
      
      
   
      
   




/*
    const init = function(){
    
    /*let t1 = document.getElementById('target');
    let div1 = document.createElement('div');
    let resultado = document.getElementById('resultado')
    div1.appendChild(resultado)
    t1.appendChild(div1);
    -------------------------------------
    var div_p = document.getElementById('resultado')
    var p = document.getElementById('h2')
    var p_clone = p.cloneNode(true)
    div_p.appendChild(p_clone)


    }
    document.addEventListener('DOMContentLoaded', init)
    */
  
   