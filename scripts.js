const input = document.getElementById('card-input')
const button = document.getElementById('card-button')

/*
//funcion para guardar el input
button.addEventListener('click', (e)=>{
    console.log(input.value)
})
*/

/*
    1.- crear el objeto donde se guarda la respuesta de la peticion  (xhr)
    2.- abrimos la conexion y hacemos una peticion GET con el objeto creado
    3.-ejecuamos un evento load
    4.-enviamos

*/



button.addEventListener('click', ()=>{

    //capturar el input
    const summoner = input.value
    const key = 'RGAPI-e31d79da-df0b-4ca9-b3f2-4f1c90aa2a23'

    //crear el objeto xhr
    let xhr

    //validacion e instancia del objeto xhr
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest
    else xhr = new ActiveXObject('Microsoft.XMLHTTP')

    //abrimos la conexion para hacer el request
    xhr.open('GET', `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${key}`)

    //laod que se dispara cuando carga toda la info 
    xhr.addEventListener('load', (data)=>{

        //transformamos en JSON el string regresado
        const infoJSON = JSON.parse(data.target.response)
        console.log(infoJSON)

        //añadimos el nombre
        const id = document.getElementById('card-id')
        id.textContent = infoJSON.name

        //añadimos la imagen
        const img = document.getElementById('card-img')
        img.src = `http://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/${infoJSON.profileIconId}.png`

        //añadimos la clase a la imgaen para que aparezca
        img.classList.add('card__img')

        //añadimos el nivel
        const lvl = document.getElementById('card-lvl')
        lvl.textContent = `${infoJSON.summonerLevel} lvl`

    })

    //enviamos el request
    xhr.send()

})




/*

button.addEventListener('click', ()=>{

    //creamos el objeto globalmente
    let xhr
    //validacion e instancia del nuevo objeto
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject('Microsoft.XMLHTTP')

    //abrimos la conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    //load se dispare cuando llego toda la info
    xhr.addEventListener('load', (data)=>{
        //construimos el string a objeto 
        const dataJSON = JSON.parse(data.target.response)

        const list = document.getElementById('list')
        //recorro el array
        for(const userInfo of dataJSON){
            //creo el elemento
            const listItem = document.createElement('li')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            //añado los items recorridos a la lista
            list.appendChild(listItem)
        }
    })

    xhr.send()

})


*/
