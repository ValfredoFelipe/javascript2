
 /*
 function criarcelular(marcacelular,tamanhodetela,capacidadedebateria){
     
        this.marcacelular = marcacelular,
        this.tamanhodetela = tamanhodetela,
        this.capacidadedebateria =capacidadedebateria,
        this.liga = function (){
            console.log('oioioioi')
        }
    
 }
 const celular1 = new criarcelular('samsung', 10, 400);
 console.log(celular1);*/

 /*const felipe = {
    estado: 'Casado',
    financeiro :3,

 }
 console.log(felipe)


 const clone = Object.assign({},felipe)
 console.log(clone)
 const clone2 = {...felipe}
 console.log(felipe)*/

 /*var vetor = [1,4,9,3]
 vetor.sort()
 console.log(vetor)*/
/*Math.max(2,4,8)
var max = Math.max(2,4,8)
console.log(max)*/


//const mensagem ='minha primeira mensagem'

//-------------------------------------
//Exerccio objeto 01
//modo 01


/*function endereco(rua, cidade, cep) {

let endereco  ={
    rua: rua,
    cidade: cidade,
    cep: cep
}
return endereco

}
console.log(endereco('Francisco guimarães', 'João Pessoa', '58028520'))*/

//modo 02
/*let enderec  ={
    rua: 'rua',
    cidade: 'cidade',
    cep: 'cep'
}


function exibirendereco(endereco){
    for(let chave in endereco)
    console.log(chave, endereco[chave])
}
exibirendereco(enderec)*/
//---------------------------------
//Exercicio 03
 /*function endereco (rua, cidade, cep){
 this.rua = rua,
 this.cidade = cidade,
 this.cep = cep
 }

 const endereco1 = new endereco('a','b','c')
 const endereco2 = new endereco('a','b','c')

 function saoiguais(endereco1, endereco2){
   
    for(let pos in endereco1) 
    if(endereco1[pos]=== endereco2[pos]){
        console.log('true')
     }else{
        console.log('false')
     }
    }
saoiguais(endereco1,endereco2)*/
//-----------------------------------------
//Exercicio 04

/*function postagem(titulo, mensagem, autor, visualizacoes, comentarios){

    
let blog = {
    titulo: titulo,
    mensagem: mensagem,
    autor: autor,
    visualizacoes: visualizacoes,
    comentarios : [
       {comentarios1: 1},
        {comentarios2: 4}
    ]
    }

return blog
}
let postagem1 = postagem('Aminha vida','Grande experiencia','Valfredo Felipe','400')
console.log(postagem1)*/


/*function teste(autorc, texto){

let autcom = [autorc,texto]
console.log(autcom)
}
teste(1,2)*/
/*function setValue () {
    var nome = document.getElementById('inputNome').value;
    document.getElementById('textNome').value = nome;
};*/
/*const idades = [ 15, 21, 42, 34]
const maior = idades.filter((evt)=>{
    return evt!=15
})
console.log(maior)*/

/*var x = 0

var myTimer= setTimeout(()=>{
    console.log('0 x é 0')
},2000)

x= 5
if(x>0){
    clearTimeout(myTimer)
    console.log('O x passou de zero')
}

var myInterval = setInterval(()=>{
    console.log('Impimindo interval')
},1000)

setTimeout(()=>{
    console.log('Não precisa mais imprimir')
    clearInterval(myInterval)
},3000)*/


/*  var produtos = [
    {id: 1, nome: "Camiseta", categoria: "Vestuário"},
    {id: 2, nome: "Sapato", categoria: "Calçados"},
    {id: 3, nome: "Blusa", categoria: "Vestuário"},
    {id: 4, nome: "Saia", categoria: "Vestuário"},
    {id: 5, nome: "Chinelo", categoria: "Calçados"},
 {id: 6, nome: "Tênis", categoria: "Calçados"} 
]
produtos = produtos.filter(produto => produto.categoria == "Vestuário");
console.log(produtos);*/

    


 




 


 
 






