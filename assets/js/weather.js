var apiKey = "2f0aa3eeabaa9f5d0f299426c008697b";
var today = moment().format('L');
var searchHistory =[];

// function for current weather conditions
function currentCondition(city) {

    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    $.ajax({
        url:queryURL,
        method: 'GET'
    }).then(function(cityWeatherResponse) {
        console.log(cityWeatherResponse);

        $('#weatherContent').css('display', 'block');
        $('cityDetail').epmty();

        var iconCode = cityWeatherResponse.weather[0].icon;
        var iconURL = `https://openweathermap.org/img/w/${iconCode}.png`;

        var currentCity = $(`
        <h2 id = "currentCity">
            ${cityWeatherResponse.name} ${today} <img src="${iconURL}" alt="${cityWeatherResponse.weather[0].description}" />
        </h2>
        <p>Temperature: ${cityWeatherResponse.main.temp} °F</p>
        <p>Humidity: ${cityWeatherResponse.main.humidity}%</P>
        <p>Wind speed: ${cityWeatherResponse.wind.speed} MPH</p>
        `);

        $('#cityDetail').append(currentCity);
            
    })
}

$("button").on("click", currentCondition);