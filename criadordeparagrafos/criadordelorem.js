const text =[
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus maxime aliquid minus corporis deserunt quod nam nulla itaque quam, quibusdam natus nostrum inventore porro modi iste provident ad odio?',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex suscipit atque eveniet magni aperiam enim ab tempora doloremque ad quam totam rem, et, quibusdam nisi at facere! Necessitatibus, blanditiis eligendi.',
    
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, suscipit facere eveniet voluptas rem maiores amet nisi ea quia nobis unde placeat obcaecati recusandae laboriosam temporibus consequatur ducimus atque expedita.',
    
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repellendus necessitatibus et sed totam eos tempora, blanditiis odit aliquid sapiente quasi, consequatur voluptas! Laboriosam minima fuga consectetur, voluptatem distinctio quidem!',
    
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit voluptatem officia distinctio maxime est illo eius. Sit laboriosam reprehenderit excepturi, totam reiciendis necessitatibus quo ratione a doloremque aspernatur! Porro?',
    
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est distinctio beatae illum totam impedit earum vel consectetur temporibus possimus voluptate tenetur quis rem quaerat voluptatum, accusantium accusamus neque placeat?',
    
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ducimus dignissimos autem provident sed laborum, vitae recusandae eligendi voluptatum dicta eveniet voluptatibus odio ea doloremque modi veritatis? Consequuntur, cupiditate minima!',
    
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ipsa minima fugiat debitis explicabo suscipit voluptatum totam delectus pariatur magni, alias accusamus labore necessitatibus accusantium ullam! Deserunt iusto distinctio porro.',
    
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit reiciendis unde voluptatum soluta! Hic ratione error itaque natus, animi facere voluptatibus asperiores autem quis cumque nesciunt eaque minima nobis. Neque?'
]

const form=document.querySelector('.lorem-form')
const amount=document.getElementById('amount')
const result=document.querySelector(".lorem-text")

form.addEventListener('submit',(e=>{
    e.preventDefault()
    const value= parseInt(amount.value)
    const random = Math.floor(Math.random()*text.length)

    // empty
    // -1
    // >9
    if(isNaN(value) || value<0 ||value >9){
        result.innerHTML=`<p class="result">${text[random]}</p>`
    }else{
        let tempText=text.slice(0,value)
       
        tempText = tempText.map((item)=>{
            return `<p class="result">${item}</p>`
        }).join("")
        result.innerHTML=tempText
    }
}))