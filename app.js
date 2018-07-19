const lugar = require('./lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion Ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log('argv.direccion',argv.direccion);
// console.log('lugar',lugar);
// lugar.getLugarLL(argv.direccion)
//     .then(res => {
//         // console.log('res',res);
//         clima.getClima(res.lat,res.lng)
//             .then(r => {
//                 console.log('r',r);
//             });
//     });

// console.log(clima);

const getInfo = async(direccion) => {

        try {
            
            const coors = await lugar.getLugarLL(direccion);
            const tem = await clima.getClima(coors.lat,coors.lng);

            return tem;

        } catch(e) {
            return `No se pudo determinar el clima de ${ direccion }`
        };

}

getInfo(argv.direccion).then(resp => {
    console.log('resp: ', resp);
});


