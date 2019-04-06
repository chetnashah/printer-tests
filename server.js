console.log('running local server');

const express = require('express')
const app = express()
const port = 5500;

app.post('/authdone', (req, res) => res.send("got auth done: " + JSON.stringify(req.query)));
app.get('/authdone', (req, res) => {
    console.log('server got auth done! : req.query = ', req.query);
    res.send("got auth done: " + JSON.stringify(req.query));
});


app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))