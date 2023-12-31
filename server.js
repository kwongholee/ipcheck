const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('listening on 8080');
})

app.get('/', (req,res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.send(ip);
})