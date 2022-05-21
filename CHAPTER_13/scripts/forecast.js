
 const key ='tppqFbkuiHC2sEbpkLALNtoA3W77p6su'

const getCity = async city => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}


const getCurrentConditions = async cityCode => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityCode}?apikey=${key}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

/*
getCity('Dublin')
    .then(data => {
        return getCurrentConditions(data.Key);
    }).then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));


getCity('Dublin')
    .then(data => console.log(data))
    .catch(err => console.log(err));

    */