const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
require('dotenv/config')

const api = proces.env.API_URL

app.use('json')

app.get(`${api}'/products`, (req, res) => {
    const product = {
        id: 1,
        name: "hair dresser",
        image: 'some_url'
    }
    res.send(product)
})

app.listen(PORT, ()=> {
    console.log(`server started on port ${PORT}`)
})