function cartItemsTemplate(items) {
  return items
    .map((item) => {
      return `<tr >
            <td>
            ${item.name}
            ${item.vegan ? '  (v)' : ''}
            ${item.gluten ? '  (g)' : ''}
            </td>
            <td></td>
            <td style="text-align: right;">${item.qty}</td>
  </tr>`;
    })
    .join('');
}

// Confirmation email sent to customer
function confirmationEmail(
  name,
  surname,
  cartItems,
  cost,
  address1,
  address2 = '',
  town,
  postcode
) {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Mather's Home Delivery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style="margin: 0; padding: 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="600"
                style="border: 1px solid #cccccc;"
              >
                <tr>
                  <td
                    bgcolor="#98d7ec"
                    align="center"
                    style="
                      padding: 40px 0 40px 0;
                      color: #ffffff;
                      font-size: 3.5em;
                    "
                  >
                    Mather's Home Delivery
                  </td>
                </tr>
                <tr style="font-size: 1.4em;">
                  <td bgcolor="#ffffff" style="padding: 20px 20px 20px 20px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td>
                          Hi ${name},
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 20px 0 20px 0;">
                          We've received your order and are busy preparing your Ice
                          Cream. Your order will be delivered on xx-xx-xx
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="border-collapse: collapse;"
                          >
                            <tr style="border-bottom: 1px solid #a9a9a9;">
                              <td
                                width="350"
                                valign="top"
                                style="padding-bottom: 3px;"
                              >
                                Flavour
                              </td>
                              <td style="font-size: 0; line-height: 0;" width="20">
                                &nbsp;
                              </td>
                              <td
                                width="100"
                                valign="top"
                                style="text-align: right; padding-bottom: 3px;"
                              >
                                Quantity
                              </td>
                            </tr>
                            ${cartItems}
                            <tr style="border-top: 1px solid #a9a9a9;">
                              <td
                                width="260"
                                valign="top"
                                style="padding-top: 3px;"
                              >
                                Grand Total
                              </td>
                              <td style="font-size: 0; line-height: 0;" width="20">
                                &nbsp;
                              </td>
                              <td
                                width="260"
                                valign="top"
                                style="text-align: right; padding-top: 3px;"
                              >
                                £${cost}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 20px 0 20px 0;">
                          Your order will be delivered to the following address:
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                          >
                            <tr>
                              <td align="center" width="260" valign="top">
                                ${name} ${surname}
                              </td>
                            </tr>
                            <tr>
                              <td align="center" width="260" valign="top">
                                ${address1}
                              </td>
                            </tr>
                            <tr>
                              <td align="center" width="260" valign="top">
                                ${address2}
                              </td>
                            </tr>
                            <tr>
                              <td align="center" width="260" valign="top">
                                ${town}
                              </td>
                            </tr>
                            <tr>
                              <td align="center" width="260" valign="top">
                                ${postcode}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 20px 0 20px 0;">
                          Have questions about your order or want to make changes?
                          Get in touch with us.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#98d7ec" style="padding: 30px 30px 30px 30px;">
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                      style="color: #ffffff; font-size: 1.1em;"
                    >
                      <tr>
                        <td>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                Phone:
                              </td>
                              <td>
                                123456789
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Email:
                              </td>
                              <td>
                                <a href="mailto:info@mathersices.com"
                                  >info@mathersices.com</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td>
                          <a href="http://www.facebook.com/mathersicecreams">
                            <img
                              src="https://i.ibb.co/mzw4mST/facebook.png"
                              alt="facebook"
                              border="0"
                            />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    
    
  
  
    `;
}

module.exports = {
  confirmationEmail,
  cartItemsTemplate,
};
