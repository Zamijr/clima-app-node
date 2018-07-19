const axios = require('axios');

const getLugarLL = async (direccion) => {
    let encodeURL = encodeURI(direccion);
    
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyCOLJJrdDFZXIfs5xlmZBYyvpYR17RNHo8`);

    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error ('No hay Resultados')
    }

    const result = resp.data.results[0];

    const { formatted_address, geometry: { location: { lat, lng } } } = result;
    
    return {
        direccion: formatted_address,
        lat,
        lng
    }
}

module.exports = {
    getLugarLL
}