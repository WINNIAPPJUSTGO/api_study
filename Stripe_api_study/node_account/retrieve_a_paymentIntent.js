const stripe = require('stripe')(
    'sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty'
  );
  
  const testFunction = async () => {
    
    const paymentIntent = await stripe.paymentIntents.retrieve(
        'pi_3OnX4sABJaSnqIjx1VAD4qSu'
    );
      console.log(paymentIntent);
  };
  
    testFunction();