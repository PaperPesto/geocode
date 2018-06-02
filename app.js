console.log('Starting app.js');

const yargs = require('yargs');
const geocode = require('./geocode.js');

const argv = yargs
.options({
    address:{
        demand: true,
        alias: 'a',
        describe: 'Address',
        string: true
    }
})
.help()
.argv;

var address = argv.address;
var credentials = 'AIzaSyCiNds_rC3hSNSd2PlV828fCI-VdrYB4RQ';

geocode.getAddressInfo(address, credentials, (errorMessage, result) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
});


