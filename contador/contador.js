let count =0
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn)=> {
    
    btn.addEventListener("click",(e)=>{
        
        const styles =e.currentTarget.classList
        if(styles.contains("diminuir")){
            count--
            value.textContent=count
        }else if(styles.contains("aumentar")){
            count++
            value.textContent=count
         } else {
            count=0
        value.textContent=0
        }
 })
});