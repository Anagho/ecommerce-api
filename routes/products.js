const { Product } = require('../models/Product')
const express = require('express')
const router = express.Router()

// get products
router.get('/', async (req, res) => {
    const productList = await Product.find()

    if (!productList) {
        res.status(500).json({success: false})
    }
    res.send(productList)
})

// create product
router.post('/', (req, res) => {
    const product = new Product ({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })
    
    product.save().then((createdProduct => {
        res.status(201).json(createdProduct)
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })
    
})

module.exports = router
