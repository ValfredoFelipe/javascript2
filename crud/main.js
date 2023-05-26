const openModal =()=> document.getElementById('modal').classList.add('active')
const closeModal = () => {
clearFields()
document.getElementById('modal').classList.remove('active')
}

const tempClient = {
    nome: "nicolas",
    email: "valfredo155@hotmail.com",
    celular: "83998102032",
    cidade: "João Pessoa"

}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []

const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient))



// DELETE
const deleteClient = (index)=>{
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}


//UPDATE
const updateCLient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

//READ

const readClient = () => getLocalStorage()

// CREATE

const createClient = (client) =>{
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
    
}

const isValidFields = ()=>{
    return document.getElementById('form').reportValidity()
}
const clearFields =() =>{
    const fields= document.querySelectorAll('.modal-field')
    fields.forEach((evt)=>{
        evt.value=''
    })

          

    
}
//INTERAÇÃO COM LAYOUT
const saveClient = ()=>{
    if(isValidFields()){
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
            
        }
        const index =document.getElementById('nome').dataset.index
        if(index =='new'){
            createClient(client)
            clearFields()
            updateTable()
            closeModal()
        
        } else{
            updateCLient(index, client)
            updateTable()
            closeModal()

        }
        
        
        
    }
}

const createRow = (client, index) =>{
    const newRow =document.createElement('tr')
    newRow.innerHTML = `
                    <td>${client.nome}</td>
                    <td>${client.email}</td>
                    <td>${client.celular}</td>
                    <td>${client.cidade}</td>
                    <td>
                        <button type="button" class="button green" id='edit-${index}'>editar</button>
                        <button type="button" class="button red" id='delete-${index}'>excluir</button>
                    </td>`
    document.querySelector('#tbody').appendChild(newRow)
}

const clearTable = () =>{
    const rows =document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach((row) => {
        row.parentNode.removeChild(row)
    })
}

const updateTable = () =>{
    const dbClient =readClient()
    clearTable()
    dbClient.forEach(createRow)
}


const fillFields = (client) =>{
    document.getElementById('nome').value = client.nome
    document.getElementById('email').value = client.email
    document.getElementById('celular').value = client.celular
    document.getElementById('cidade').value = client.cidade
    document.getElementById('nome').dataset.index =client.index
}

const editClient = (index) =>{
    const client = readClient()[index]
    client.index=index
    fillFields(client)
    openModal()
}

const editDelete = (evt) => {
    if(evt.target.type == 'button'){

        const [action,index] = evt.target.id.split('-')

        if(action=='edit'){

         editClient(index)

        }else{
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`)
            if(response){
            deleteClient(index)
            updateTable()
            }
        }

        
    }
}

updateTable()

//EVENTOS
document.getElementById('cadastrarCliente').addEventListener('click', openModal)
document.getElementById('modalClose').addEventListener('click', closeModal)
document.getElementById('salvar').addEventListener('click', saveClient)
document.getElementById('cancelar').addEventListener('click', closeModal)
document.querySelector('#tableClient>tbody').addEventListener('click', editDelete)

