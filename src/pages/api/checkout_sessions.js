import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){
	let stripePromise = null

	const getStripe = () => {
		if(!stripePromise) {
			stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
		}
		return stripePromise
	}

	const stripe = await getStripe()

	await stripe.redirectToCheckout({
		mode: 'payment',
		lineItems,
		successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
		cancelUrl: window.location.origin
	})

}

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {

//     const items = req.body.cartItem

//         const transformedItems = items.map((item) => ({
//             price_data: {
//                 currency: "aud",
//                 product_data: {
//                   name: `${item.name.toUpperCase()} - ${item.size}`,
//                 },
//                 unit_amount: item.price * 100,
//             },
//             quantity: item.quantity,
//         }))

//     try {
//       const session = await stripe.checkout.sessions.create({
//         line_items: transformedItems,
//         mode: 'payment',
//         success_url: `${req.headers.origin}/Success`,
//         cancel_url: `${req.headers.origin}/Cancel`,
//       });
//       res.json({"sessionURL": session.url});
//     } catch (err) {
//       console.log(err);
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }