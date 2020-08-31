const express = require('express');
const router = express.Router();
const config = require('config');
const shopEmail = config.get('shopEmail');
const shopEmailPass = config.get('shopEmailPass');
const Order = require('../../models/Order');
const nodemailer = require('nodemailer');
const {
  confirmationEmail,
  cartItemsTemplate,
} = require('../../templates/orderConfirmation');

// route POST api/sendmail
// desc Send Order confirmation

router.post('/', async (req, res) => {
  //
  // Destructure request body
  const {
    name,
    surname,
    address1,
    address2,
    town,
    postcode,
    email,
    phone,
  } = req.body.contact;

  const cost = req.body.cost;

  // Create products object to be saved to DB

  const products = req.body.cartTotal.map((item) => {
    return { productId: item.id, product: item.name, qty: item.qty };
  });

  let order = new Order({
    name,
    surname,
    address1,
    address2,
    town,
    postcode: postcode.toUpperCase(),
    email,
    phone,
    items: products,
    deliveryDate: Date.now(),
    orderTotal: cost,
  });

  try {
    await order.save();
    res.send('Saved....');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  const cartItems = cartItemsTemplate(req.body.cartTotal);

  // HTML email with user info

  const emailToSend = confirmationEmail(
    name,
    surname,
    cartItems,
    cost,
    address1,
    address2,
    town,
    postcode
  );

  // choose mail servive and provide credentials
  const transport = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
      user: shopEmail,
      pass: shopEmailPass,
    },
  });

  // configure email

  var mailOptions = {
    from: `"Mather's Ice Cream" <${shopEmail}>`,
    // email user entered on confirmation page. Also sends to shop owner
    to: `${email}, ${shopEmail}`,
    subject: 'You Have Ice Cream ',
    html: emailToSend,
  };

  // send message

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
  });
});

module.exports = router;
