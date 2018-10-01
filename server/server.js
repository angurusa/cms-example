const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());

const data = {
    title: 'CMS Andichamy andichamy andcg',
    description: 'This is an example app of cms',
    firstName: 'Andichamy - Modified name',
    lastName: 'Gurusamy'
};

app.get('/cms', (req, res) => {
    console.log('GET: received cms data');
    setTimeout(() => {
        res.send(data);
    }, 3000);
});

app.listen(8080, () => console.log('Server started at port 8080!!!'));