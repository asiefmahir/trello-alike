const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Bismillah!"
    })
})

app.listen(8080, () => {
    console.log('Server is active');
})