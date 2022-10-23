const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const allcities = require('./data/allcity.json');
const details = require('./data/details.json');

app.get('/', (req, res) => {
    res.send('Travel Api Is Running')
});

app.get('/all-cities', (req, res) => {
    res.send(allcities);
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const selectedDetails = details.find(d => d._id === id);
    res.send(selectedDetails);
    // console.log(req.params.id);
})

app.listen(port, () => {
    console.log('Travel Guru Server', port);
})