async function getPlaces() {
    var input = document.getElementById("input");
    await new google.maps.places.Autocomplete(input);
}


let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let searchKey = document.getElementById("input").value;
    console.log(searchKey);
   searchWeather(searchKey);
});


function searchWeather(searchKey) {
    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=6c5f307e50884bab4510b7a3ccb9808a`;
    window.fetch(weatherApi)
      .then((data) => {
          data.json()
          .then((weatherinfo) => {
               
               let weatherPrediction = weatherinfo.weather[0];
               console.log(weatherPrediction);
               let main = weatherinfo.main;
               console.log(weatherinfo);
              let  output = [];
            
                output += `
             <div>
             <span> <i class="fas fa-map-marker-alt"></i><span>
             <span>${searchKey} , </span>
             <span class="icon"><img src="http://openweathermap.org/img/wn/${weatherPrediction.icon}.png" /></span>
            <span class ="badgle text.dark">${weatherPrediction.main} , </span>
             <span>${(main.temp)}&deg;f </span>
             <br>
             <span> Humidity :</span>
             <span>${(main.humidity)} </span>
             
             </div>
                `;
                document.getElementById("weatherResult").innerHTML=output;
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
}
