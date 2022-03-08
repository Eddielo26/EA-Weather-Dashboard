var weather = {
    "apiKey":"2f0aa3eeabaa9f5d0f299426c008697b",
      fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        var {name} = data;
        var {icon, description} = data. weather[0];
        var {temp, humidity} = data.main;
        var {speed} = data.wind;
        //var {uv} = data.uvi
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText= name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " °F";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        //document.querySelector(".uv").innerText = "UV Index: " + uv;

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-box").value);
    }
};

document.querySelector(".search-btn").addEventListener("click", function() {
    weather.search();

});

document.querySelector(".search-box").addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        weather.search();
       
    }
});

weather.fetchWeather("Los Angeles");

var weatherforecast = {
    "apiKey":"2f0aa3eeabaa9f5d0f299426c008697b",
    fetchWeather: function (city) {
        fetch(
            "api.openweathermap.org/data/2.5/forecast?q=" 
            + city 
            + "&units=imperial&appid="
            + this.apiKey
            
        )
        .then((response) => response.json())
        .then((data) => {
            for(i=0; i < 5; i++) {
                document.querySelector (".day1" + (i+1) + "main").innerText = data.main;
            
            }
        })
    }

}
