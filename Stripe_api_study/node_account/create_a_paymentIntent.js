const stripe = require('stripe')(
    'sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty'
  );
  
  const testFunction = async () => {
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 2000,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true,
    },
    });
    
      console.log(paymentIntent);
  };
  
    testFunction();