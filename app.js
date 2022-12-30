const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const morgan = require('morgan')
const mongoose = require('mongoose')

require('dotenv/config')

const api = process.env.API_URL

// middleware
app.use(express.json())
app.use(morgan('tiny'))

// get products
app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: "hair dresser",
        image: 'some_url'
    }
    res.send(product)
})

// create product
app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct)
    res.send(newProduct)
})

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
})
.then(()=> {
    console.log('Database Connection is ready...')
})
.catch((err) => {
    console.log(err)
})

app.listen(PORT, ()=> {
    console.log(`server started on port ${PORT}`)
})