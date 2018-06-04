console.log('starting apiserver.js');

const express = require('express');
const geocode = require('./geocode.js');
const bodyParser = require('body-parser');

var app = express();
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var credentials = 'AIzaSyCiNds_rC3hSNSd2PlV828fCI-VdrYB4RQ';

app.get('/', function(req, res) {
    res.json({ message: 'Raspberry Pi-3 Via verdi API' });   
});

app.post('/getAddress', (req, res) => {
    geocode.getAddressInfo(req.body.address, credentials, (errorMessage, result) => {
        console.log('Request body:', JSON.stringify(req.body));
        console.log('Response body:', JSON.stringify(result));
        res.end(JSON.stringify(result, undefined, 2));    
    });
})

var server = app.listen(5000, () => {
    var host = server.address().address
    var port = server.address().port

    console.log("Server listening at http://%s:%s", host, port)
});