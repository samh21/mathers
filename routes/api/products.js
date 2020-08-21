const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

const { check, validationResult } = require('express-validator');

// route POST api/products
// desc Add new products to db

router.post(
  '/',
  [
    check('name', 'Product Name is required').not().isEmpty(),
    check('v', 'Please indicate if Product is Vegan').not().isEmpty(),
    check('g', 'Please indicate if Product is Gluten Free').not().isEmpty(),
    check('active', 'Please make sure product is active or inactive'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, v, g, active } = req.body;

    try {
      // See if product already exists
      let product = await Product.findOne({ name });

      if (product) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Product Already Exists' }] });
      }

      product = new Product({
        name,
        v,
        g,
        active,
        img,
      });

      await product.save();

      res.send('product Added');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// route GET api/products
// desc Get all products

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({ active: true });
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
