var date = new Date();
var options = {  
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'UTC'
};

var dateTime = new Intl.DateTimeFormat('en-US', options).format(date);
console.log(dateTime);








let weather = {
    apiKey: "e5a368aa973c1a0e8b79d61999ad27a2",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )

      .then((response) => response.json())
      .then((data) => this.displayWeather(data));

      },

      displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const {country} = data.sys;
        const {lon} = data.coord
        const {lat} = data.coord
  
        console.log(name,icon,description,temp,humidity,speed,country)
        document.querySelector(".City").innerText = "Current Weather In: " + name; 
        document.querySelector(".temp").innerText = "The Temprature is Currenty:  " + temp + " ℃"; 
        document.querySelector(".humidity").innerText = "The Humidity is Currently: " + humidity + "%"; 
        document.querySelector(".wind").innerText = "The Speed is Currently " + speed + " km/h"; 
        document.querySelector(".description").innerText = "It Seems like its a  " + description; 


        document.querySelector(".location").innerText = "Located In " + country; 
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
        document.querySelector(".long").innerText = "Longatuide " + lon ; 
        document.querySelector(".lat").innerText = "Lattidue " + lat; 
        document.querySelector(".timezone").innerText = "Time Is Currently " + dateTime; 

        var date = new Date();
var options = { timeZone: 'America/Los_Angeles' };
var time = new Intl.DateTimeFormat('en-US', options).format(date);
console.log(time);







        



       



      },

      search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
      },

    };

    document.querySelector(".search button").addEventListener("click", function () {
        weather.search();
      }); //pressing search button to search

      document//pressing enter to search
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      });


    
