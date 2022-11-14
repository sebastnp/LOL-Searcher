const input = document.getElementById('card-input')
const button = document.getElementById('card-button')

/* Nueva implementacion con axios*/

button.addEventListener('click', () => {

    //guardamos el summoner name
    const summoner = input.value
    const apiKey = 'RGAPI-150f68e3-1dfc-4b57-9540-819f749a178d'

    //al importar axios, nos brinda el metodo con los siguientes atributos
    axios({
        method: 'GET',
        url: `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${apiKey}`
    }).then(res => {
        const id = document.getElementById('card-id')
        const img = document.getElementById('card-img')
        const lvl = document.getElementById('card-lvl')

        //AXIOS DEVUELVE UN OBJETO, EN donde debemos acceder a .data para los datos
        id.textContent = res.data.name

        img.src = `http://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/${res.data.profileIconId}.png`
        img.classList.add('card__img')

        lvl.textContent = res.data.summonerLevel
    }).catch(e => console.log(e))

})


/*    Solucion con XMLHttpRequest
    1.- crear el objeto donde se guarda la respuesta de la peticion  (xhr)
    2.- abrimos la conexion y hacemos una peticion GET con el objeto creado
    3.-ejecuamos un evento load
    4.-enviamos

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

*/