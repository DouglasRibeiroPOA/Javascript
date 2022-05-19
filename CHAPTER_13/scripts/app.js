const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updatedUi = data => {
    //  const cityDets = data.cityDets;
    // const weather = data.weather;
    // destructure properties
    const { cityDets, weather } = data;

    console.log(weather);

    //update template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `;

     const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
     icon.setAttribute('src',iconSrc);


    let timeSrc = null;
    if (weather.IsDayTime) {

        timeSrc = 'img/day.svg'
    } else {
        timeSrc = 'img/night.svg'
    }

    time.setAttribute('src', timeSrc);

    //remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

const updateCity = async city => {
    console.log(city);
    const cityDets = await getCity(city);
    const weather = await getCurrentConditions(cityDets.Key);

    return { cityDets, weather }
};

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();
    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    //update ui with the new city
    updateCity(city)
        .then(data => updatedUi(data))
        .catch(err => console.log(err));
});