const stripe = require('stripe')(
    'sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty'
  );
  
  const testFunction = async () => {
    
    const paymentIntents = await stripe.paymentIntents.list({
        limit: 3,
      });
      console.log(paymentIntents);
  };
  
    testFunction();