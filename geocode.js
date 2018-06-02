console.log('starting goecode.js');

var request = require('request');

var getAddressInfo = (address, credentials, callback) => {

    var encodedAddress = encodeURIComponent(address);
    var APIUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${credentials}`;

    request({
        url: APIUrl,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect to google server.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find address.');
        } else if (body.status = 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.getAddressInfo = getAddressInfo;