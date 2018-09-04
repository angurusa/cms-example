const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());

const data = {
    title: 'CMS Example',
    content: 'This is an example app of cms',
    firstName: 'Andichamy',
    lastName: 'Gurusamy'
}

app.get('/cms', (req, res) => {
    console.log('GET: received cms data');
    setTimeout(() => {
        res.send(data);
    }, 2000);
});

app.listen(8080, () => console.log('Server started at port 8080!!!'));