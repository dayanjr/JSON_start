//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5347315&appid=b85709abfebaacbe0c192a934ab5d901&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('country').innerHTML=weatherInfo.sys.country;
    const captionDesc = document.querySelector('figcaption');
    const iconcode = weatherInfo.weather[0].icon;
    const desc = weatherInfo.weather[0].description;
    console.log(desc);
    const icon_path = "//openweathermap.org/img/w/"+ iconcode +".png";
    //console.log(icon_path);
    document.getElementById("weather_icon").src = icon_path;
    document.getElementById("weather_icon").alt = desc;
    captionDesc.textContent = desc;

    
  
  
    

 }); //end of "then" fat arrow function