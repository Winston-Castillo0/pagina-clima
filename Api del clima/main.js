let lon;
let lat;
let temperatura = document.querySelector(".temp")
let icon = document.querySelector(".icon")  
let summary = document.querySelector(".summary")
let loc = document.querySelector(".location")
const kelvin = 273.15

//API Geolocalizacion


if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)

        let lon = position.coords.longitude
        let lat = position.coords.latitude

        //api clima
    
    let apiKey = "96652815fbe7cab7b21da84c4b23fd80"
    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
   
    
    fetch(URL)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log("DATA AQUI")
        console.log(data)

        temperatura.textContent = 
        Math.floor(data.main.temp - kelvin) + "°C"
        summary.textContent = (data.weather[0].description)
        loc.textContent = (data.name + ", " + data.sys.country)


        if (data.weather[0].main === "Clouds") {
            icon.src = "animated/cloudy.svg"
        } else if (data.weather[0].main === "Thunderstorm") {
            icon.src ="animated/weather.svg"
        } else if (data.weather[0].main === "Drizzle") {
            icon.src = "animated/snowy-5.svg"
        } else if (data.weather[0].main === "Rain") {
            icon.src = "animated/rainy-6.svg"
        } else if (data.weather[0].main === "Clear") 
            icon.src = "animated/day.svg"
        
   
        
    })
    




}

)}


