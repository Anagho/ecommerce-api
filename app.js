const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const morgan = require('morgan')
const mongoose = require('mongoose')
const api = process.env.API_URL

require('dotenv/config')

// middleware
app.use(express.json()) // to send json format
app.use(morgan('tiny')) // to handle events log

// Routes
const categoriesRoutes = require('./routes/categories')
const productsRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')
const ordersRoutes = require('./routes/orders')


app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productsRoutes)
app.use(`${api}/users`, usersRoutes)
app.use(`${api}/orders`, ordersRoutes)


// Database Connection
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

// Server
app.listen(PORT, ()=> {
    console.log(`server started on port ${PORT}`)
})