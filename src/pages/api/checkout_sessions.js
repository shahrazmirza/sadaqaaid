const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, donationType } = req.body;

    if (!amount || amount <= 0 || !donationType) {
      return res.status(400).json({ error: 'Invalid donation details' });
    }

    const transformedItems = [
      {
        price_data: {
          currency: 'aud',
          product_data: {
            name: `${donationType}`,
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ];

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${req.headers.origin}/Success`,
        cancel_url: `${req.headers.origin}/Cancel`,
        line_items: transformedItems,
      });
      res.json({ sessionURL: session.url });
    } catch (err) {
      console.error("Error creating checkout session:", err);
      res.status(500).json({ error: 'Error creating checkout session' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}