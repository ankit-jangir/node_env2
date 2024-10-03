const express = require('express')
require('./src/confic.js')
const port = 7893
const app = express()
app.use(express.json())
app.listen(port, () => {
    console.log(`server is connected ${port}`);
})