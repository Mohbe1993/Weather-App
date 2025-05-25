
      const apiKey = "ef0a865aa4c54b1bee125b2bbd41fcd9";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

      const searchInput = document.querySelector(".searsh input");

      const searchBtn = document.querySelector(".searsh button");
      const wIcon = document.querySelector(".wIcon");

      async function checkWeather(city) {
        const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (res.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
          var data = await res.json();

          document.querySelector(".city").innerText = data.name;
          document.querySelector(".temp").innerText =
            Math.round(data.main.temp) + "°C";
          document.querySelector(".humi").innerText = data.main.humidity + "%";
          document.querySelector(".wind").innerText = data.wind.speed + " m/s";

          if (data.weather[0].main == "Clouds") {
            wIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
          } else if (data.weather[0].main == "Clear") {
            wIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
          } else if (data.weather[0].main == "Rain") {
            wIcon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
          } else if (data.weather[0].main == "Drizzle") {
            wIcon.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>';
          } else if (data.weather[0].main == "Snow") {
            wIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
          } else {
            wIcon.innerHTML = '<i class="fa-solid fa-smog"></i>';
          }

          document.querySelector(".error").style.display = "none";
          document.querySelector(".weather").style.display = "block";
        }
      }

      searchBtn.addEventListener("click", () => {
        checkWeather(searchInput.value);
      });
    