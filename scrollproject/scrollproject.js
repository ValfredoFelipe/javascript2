// *******set date***********
const date =document.querySelector('.date')
date.innerHTML = new Date().getFullYear()

// ********close links********
const navToggle = document.querySelector('.nav-toggle')
const linksContainer= document.querySelector('.links-container')
const links= document.querySelector('.links')

navToggle.addEventListener("click", ()=>{
    // linksContainer.classList.toggle('show-links')
    const containerHeight=linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if(containerHeight===0){
        linksContainer.style.height =`${linksHeight}px`
    }else{
        linksContainer.style.height = 0
    }
})
const navbar =document.getElementById('nav')
const topLink =document.querySelector('.top-link')
const linkSubir=document.querySelector('.clique-subir')
// ********fixed navbar *************
window.addEventListener("scroll", ()=>{
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height
    if(scrollHeight>navHeight){
        navbar.classList.add('fixed-nav')
        
    }else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollHeight>300){
        linkSubir.classList.add('link-subir')
    }else{
        linkSubir.classList.remove('link-subir')
    }
    console.log(navHeight)

})
// **********smoth scroll ************
const scrollinks =document.querySelectorAll('.scroll-link')
scrollinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()
        const id=e.currentTarget.getAttribute('href').slice(1)
       
        const element=document.getElementById(id)
        // Calculando altura
        const navHeight=navbar.getBoundingClientRect().height
        const containerHeight =linksContainer.getBoundingClientRect().height
        const fixedNav=navbar.classList.contains('fixed-nav')

        let position=element.offsetTop - navHeight
        
        if(!fixedNav){
            position =position -navHeight
        }
        if (navHeight>82){
            position=position+containerHeight
        }
        window.scrollTo({
        left:0,
        top:position
        })
        linksContainer.style.height=0
    })
})
