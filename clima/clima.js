
const axios = require('axios');

const getClima = async(lat,lon) => {

    const tempCel = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d1f4ca43fd2af5b46ab22b2f0f558b1a&units=metric`);
    // console.log('tempCel',tempCel.data.main.temp);

    return tempCel.data.main.temp;
}

module.exports = {
    getClima
}
