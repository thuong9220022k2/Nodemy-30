var input = document.querySelector('.search input')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var temp = document.querySelector('.temparate')
var weather = document.querySelector('.weather')
var visibility = document.querySelector('.visibility p')
var wind = document.querySelector('.wind p')
var sun = document.querySelector('.sun p')



async function changeWeatherUI(capital){
    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667 `
    const data = await fetch(url).then(res=>res.json())
    city.innerText = data.name
    country.innerText = data.sys.country
    time.innerText = new Date().toLocaleString()
    let temp1 = Math.round(data.main.temp)
    temp.innerText = temp1
    weather.innerText = data.weather[0] ? data.weather[0].main : ''
    visibility.innerText = data.visibility +' '+'(m)'
    wind.innerText = data.wind.speed +' '+'(m/s)'
    sun.innerText = data.main.humidity +' '+'%'
    document.body.className = 'hot'
    if(temp1 <= 23){
        document.body.className = 'cold'
    }
    if(temp1 >23){
    document.body.className = 'hot'
    }
}

input.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
         let capital = input.value.trim()
         console.log(capital);
        changeWeatherUI(capital)
    }
})
changeWeatherUI('ha noi')


