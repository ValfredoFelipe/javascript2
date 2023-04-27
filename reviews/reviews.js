const reviews =[
    
    {
        id:0,
        img:"IMAGEM0",
        nome: "Joana",
        job:"PROFESSORA",
        info:"2Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis unde dolorem temporibus iste deleniti expedita, quos animi veniam? Impedit nostrum non consequuntur quis ullam asperiores enim sequi animi officiis!"
    },
   
    
    {

    id:1,
    img:"IMAGEM1",
    nome:"Antonia",
    job:"Tenista",
    info:"1Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis unde dolorem temporibus iste deleniti expedita, quos animi veniam? Impedit nostrum non consequuntur quis ullam asperiores enim sequi animi officiis!"
},
{
    id:2,
    img:"IMAGEM2",
    nome:"Matheus",
    job:"ENGENHEIRO",
    info:"2Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis unde dolorem temporibus iste deleniti expedita, quos animi veniam? Impedit nostrum non consequuntur quis ullam asperiores enim sequi animi officiis!"
},
{
    id:3,
    img:"IMAGEM3",
    nome:"Carlos",
    job:"ENCANADOR",
    info:"3Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis unde dolorem temporibus iste deleniti expedita, quos animi veniam? Impedit nostrum non consequuntur quis ullam asperiores enim sequi animi officiis!"
}

]
const img =document.getElementById("person-img")
const author =document.getElementById("author")
const job = document.getElementById("job")
const info=document.getElementById("info")
const main=document.querySelector(".container")

const prevBtn=document.querySelector(".prev-btn")
const nextBtn=document.querySelector(".next-btn")
const randomBtn=document.querySelector(".random-btn")

let currentItem=0

main.addEventListener("click",()=>{
    showPerson(currentItem)
})

function showPerson(currentItem){
    const item =reviews[currentItem]
    img.textContent =item.img
    author.textContent= item.nome
    job.textContent=item.job
    info.textContent=item.info
}
nextBtn.addEventListener("click",()=>{
    
    currentItem++
    if(currentItem>reviews.length-1){
        currentItem=0
    }
    showPerson(currentItem)
})
prevBtn.addEventListener("click",()=>{
    currentItem--
    if(currentItem<0){
        currentItem=reviews.length-1
    }
    showPerson(currentItem)
})
randomBtn.addEventListener("click",()=>{
    currentItem=Math.floor(Math.random()*reviews.length)
    showPerson(currentItem)
})
