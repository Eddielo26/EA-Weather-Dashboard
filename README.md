# Weather Dashboard

![](https://img.shields.io/badge/Javascript-yellow.svg)
![](https://img.shields.io/badge/HTML-red.svg)

# Table of Contents
* [Description](#description)
* [Functionality](#functionality)
* [Image](#image)
* [Installation](#installation)
* [Usage](#usage)
* [Contact](#contact)


# Description 
This is a weather dashboard with form inputs that will run in the browser and feature dynamically updated HTML and CSS. It allows the user to search to view weather outlook for multiple cities so travelers can plan a trip accordingly.

# Functionality
* When searched for a city, the current and future conditions for that city will be presented and that city is added to the search history

* When viewing current weather conditions for the city, the following is shown:
  * City name
  * Date
  * An icon representation of weather conditions
  * Temperature
  * Humidity
  * Wind speed
  * UV index
  
* When viewing the UV index, it is presented with a color indicating severity (reference:<a href="https://en.wikipedia.org/wiki/Ultraviolet_index#:~:text=A%20UV%20index%20reading%20of,broad%20spectrum%20SPF%2030%2B%20sunscreen.&text=A%20UV%20index%20reading%20of%206%20to%207%20means%20high,harm%20from%20unprotected%20sun%20exposure."> Ultraviolet Index Wikipeadia</a>)
  * ![#3EA72D](https://via.placeholder.com/15/3EA72D/000000?text=+) 0-2 Low
  * ![#FFF300](https://via.placeholder.com/15/FFF300/000000?text=+) 3-5 Moderate
  * ![#F18B00](https://via.placeholder.com/15/F18B00/000000?text=+) 6-7 Orange
  * ![#E53210](https://via.placeholder.com/15/E53210/000000?text=+) 8-10 Very High
  * ![#B567A4](https://via.placeholder.com/15/B567A4/000000?text=+) 11+ Extreme

* When viewing the future weather conditions for the city, a 5-day forecast will be presented with the following information:
  * Date
  * An icon representation of weather conditions
  * Temperature
  * Humidity
  * When a city in the search history is clicked, the current and future conditions for that city is presented again

* OpenWeather API is used to retrieve weather data for cities. And <code>localStorage</code> is used to store persistent data.

# Image
![Screen Shot 2022-03-12 at 4 00 48 AM](https://user-images.githubusercontent.com/94813193/158017168-cf34425b-9e32-4145-b8c6-7aab518719f9.png)

# Installation
* Download or clone repository
* Open the main page (index.html) on your browser to view
* Use a text editor to view all coding, Visual Studio Coding is recommended.

# Usage
   * Checking current weather
   * Checking weather according to a 5-day forecast
   

# Contact
<a href="https://github.com/Eddielo26">Github: Eddielo26</a>

[Return to top](#weather-dashboard)
