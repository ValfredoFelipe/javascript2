const menu=[
    {
        id:1,
        title: "panqueca",
        category:"café da manhã",
        price: 10,
        img: "IMAGEM 1",
        desc:"lorem panqueca lorem panqueca lorem panqueca lorem panqueca lorem panqueca lorem panqueca lorem panqueca lorem panqueca."

    },
    {
        id:2,
        title: "arroz com feijão",
        category:"almoço",
        price: 18,
        img: "IMAGEM 2",
        desc:"lorem arroz com feijão lorem arroz com feijãolorem arroz com feijão lorem arroz com feijão lorem arroz com feijão lorem arroz com feijão "

    },
    {
        id:3,
        title: "macarronada",
        category:"jantar",
        price: 16,
        img: "IMAGEM 3",
        desc:"lorem macarronada lorem macarronadalorem macarronada lorem macarronada lorem macarronada lorem macarronada lorem macarronada "

    },
    {
        id:4,
        title: "pão de queijo",
        category:"café da manhã",
        price: 5,
        img: "IMAGEM 4",
        desc:"lorem pão de queijo  lorem pão de queijo lorem pão de queijo lorem pão de queijo lorem pão de queijo lorem pão de queijo lorem pão de queijo lorem pão de queijo "

    },
    {
        id:5,
        title: "cachorro quente",
        category:"jantar",
        price: 11,
        img: "IMAGEM 5",
        desc:"lorem cachorro quente lorem cachorro quente lorem cachorro quente lorem cachorro quente lorem cachorro quente lorem cachorro quente lorem cachorro quente lorem cachorro quente "

    },
    {
        id:6,
        title: "churrasco",
        category:"almoço",
        price: 21,
        img: "IMAGEM 6",
        desc:"lorem churrasco lorem churrasco lorem churrasco lorem churrasco lorem churrasco lorem churrasco lorem churrasco lorem churrasco lorem churrasco lorem churrasco "

    },
    {
        id:7,
        title: "sorvete",
        category:"almoço",
        price: 9,
        img: "IMAGEM 7",
        desc:"lorem sorvete lorem sorvete lorem sorvete lorem sorvete lorem sorvete lorem sorvete lorem sorvete lorem sorvete lorem sorvete lorem sorvete "

    },
    {
        id:8,
        title: "bolo de cenoura",
        category:"café da manhã",
        price: 8,
        img: "IMAGEM 8",
        desc:"lorem bolo de cenoura lorem bolo de cenoura lorem bolo de cenoura lorem bolo de cenoura lorem bolo de cenoura lorem bolo de cenoura lorem bolo de cenoura lorem bolo de cenoura lorem bolo de cenoura  "

    }

]
const sectionCenter = document.querySelector(".section-center")
const filterBtns = document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded", ()=>{

displayMenuItems(menu)


})
filterBtns.forEach((btn)=>{
btn.addEventListener("click",(e)=>{

   const category =e.currentTarget.dataset.id
   const  menuCategory =menu.filter((menuItem)=>{
    if(menuItem.category===category){        return menuItem
   }
})
if(category ==="all"){
    displayMenuItems(menu)
}else{
    displayMenuItems(menuCategory)
}
    
})

})

function displayMenuItems(menuItems){
    let displayMenu=menuItems.map((item)=>{
        return `<article>
        <img src="" alt=${item.img} class="photo"/>
        <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
        </article>`
         })
        displayMenu =displayMenu.join("")
        sectionCenter.innerHTML = displayMenu

}