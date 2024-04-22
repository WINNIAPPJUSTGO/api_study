const stripe = require('stripe')('sk_test_Hrs6SAopgFPF0bZXSN3f6ELN');

async function exampleFunction(args) {
  try {
    const paymentIntent = await stripe.paymentIntents.create(args);
    console.log('No error.');
  } catch (e) {
    switch (e.type) {
      case 'StripeCardError':
        console.log(`A payment error occurred: ${e.message}`);
        break;
      case 'StripeInvalidRequestError':
        console.log('An invalid request occurred.');
        break;
      default:
        console.log('Another problem occurred, maybe unrelated to Stripe.');
        break;
    }
  }
}