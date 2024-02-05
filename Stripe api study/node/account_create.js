const stripe = require('stripe')('sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty');


const testFunction = async () => {
  const account = await stripe.accounts.create({
    type: 'custom',
    country: 'CA',
    email: 'jenny.rosen@example.com',

    business_type: 'individual',
    

    capabilities: {
      card_payments: {
        requested: true,
      },
      transfers: {
        requested: true,
      },
    },
  });

  
  console.log(account);
}


testFunction();
