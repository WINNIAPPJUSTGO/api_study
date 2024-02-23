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
    individual: {
      
      address: {
        city: "Winnipeg",
        line1: "ABC Address line 1",
        postal_code : "R3E 5S6",
        state: "Manitoba",
      },
      dob:{
        day:23,
        month:9,
        year:1995,
      },
      first_name: "John",
      last_name: "Lee",
    },
    tos_acceptance:{
      date: Math.floor(1707090696267 / 1000),
      ip: "0.0.0.0"
  }



  });

  
  console.log(account);
}


testFunction();
