const express = require('express');
const app = express();

const PORT =4500

app.get('/', (req, res, next) => {
    res.send('<h1>Hello world<h1>');
})

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})