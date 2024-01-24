require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static('./public'))

app.get('/hello', (req, res) => {
    res.status(200).json({msg: "hello there mate"});
})

app.listen(port, console.log(`Server is listening on port ${port}`))