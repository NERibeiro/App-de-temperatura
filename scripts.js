

const key = "52c7df3d27a3144e7a6094443e4404e6"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".clima-cidade").innerHTML = " Clima em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".prev").innerHTML = dados.weather[0].description
    document.querySelector(".umi").innerHTML = dados.main.humidity + "%"
    document.querySelector(".icone-nuvem").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade (cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then ( resposta => resposta.json())

   colocarDadosNaTela(dados)
}


function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}