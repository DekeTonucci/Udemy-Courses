const { stripeSecretKey } = require('../config/dev')
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // console.log(req.body);
    if (!req.user) {
      return res.status(401).send({ error: 'You must be logged in...'});
    }
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5.00 for 5 credits.',
      source: req.body.id
    });

    // console.log({charge});

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
