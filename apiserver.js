console.log('starting apiserver.js');

const express = require('express');
const geocode = require('./geocode.js');

var app = express();

var address = 'Via argomenna';
var credentials = 'AIzaSyCiNds_rC3hSNSd2PlV828fCI-VdrYB4RQ';

app.get('/geoGet', (req, res) => {
    geocode.getAddressInfo(address, credentials, (errorMessage, result) => {
        console.log(result);
        res.end(JSON.stringify(result, undefined, 2));    
    });
})

var server = app.listen(5000, () => {
    var host = server.address().address
    var port = server.address().port

    console.log("Server listening at http://%s:%s", host, port)
})
