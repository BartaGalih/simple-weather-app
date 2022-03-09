let weather = {
  apiKey: "7e75513e8eaa6e0de51d59338fb9db06",
  fetchWeather: function(city){
    fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&units=metric&appid="
    + this.apiKey
    )
    .then((Response)=>Response.json())
    .then((data)=>this.displayWeather(data))
  },

  displayWeather: function(data) {
    const name = data.name;
    const temp = data.main.temp;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const status = data.weather[0].description;
    const icon = data.weather[0].icon;
    console.table(name, temp, wind, humidity, status, icon);
    document.getElementById("city").innerText=name;
    document.querySelector(".temp").innerText=temp+"°C";
    document.querySelector(".wind").innerText=wind+" km/h"
    document.querySelector(".humidity").innerText=humidity+" %";
    document.querySelector(".icon-img").src= "https://openweathermap.org/img/wn/" + icon + "@4x.png";
    document.querySelector(".status").innerText= status;
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
      document.body.style.backgroundPosition = "center";
  },

  search: function() {
    this.fetchWeather(document.querySelector(".search").value);
  }
};

document
  .querySelector(".search")
  .addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

document.querySelector(".search-bar button").addEventListener("click", function() {
  weather.search();
});


let month = ["January","February"	,"March","April"
,"May","June","July","August","September","October"	,"November"	,"December"]
let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth();
let d = n.getDate();
let date = month[m] + " " + d + " " + y;
document.getElementById("date").innerText= date;

weather.fetchWeather("Yogyakarta");