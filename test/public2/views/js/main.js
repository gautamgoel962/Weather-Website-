console.log("This is main.js");

const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const day = document.getElementById('day');
const today_date = document.getElementById('today_date');

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Plz Write the name before Search`;
        temp.innerHTML = "";
        temp_status.innerHTML = "";
    }
    else {
        try {          
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cccd320ca2eacadf1997cca96a6eeffa`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerHTML = `${arrData[0].main.temp}<sup>o</sup>C`;
            const tempMood = arrData[0].weather[0].main;
            
            if (tempMood === "Clear") {
                temp_status.innerHTML = `<i class = 'fas fa-sun' style='color: #eccc68;'></i>`;
            }
            else if (tempMood === "Clouds") {
                temp_status.innerHTML = `<i class = 'fas fa-cloud' style='color: #f1f2f6;'></i>`;
            }
            else if (tempMood === "Rain") {
                temp_status.innerHTML = `<i class = 'fas fa-cloud-rain' style='color: #a4b0be;'></i>`;
            }
            else {
                temp_status.innerHTML = `<i class = 'fas fa-sun' style='color: #eccc68;'></i>`;
            }
        } catch {
            temp_status.innerHTML = "";
            temp.innerHTML = "";
            city_name.innerText = `Plz Enter the city name properly`;
        }
    }
});

// Adding date in the dom of weather.hbs . 
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();

day.innerText = days[d.getMonth()];
today_date.innerText = `${d.getDate()} ${months[d.getMonth()]}`;