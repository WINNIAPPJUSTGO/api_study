const stripe = require('stripe')('sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty');


const testFunction = async () => {
  const account = await stripe.accounts.create({
    type: 'custom',
    country: 'CA',
    email: '1234@qq.com',

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
      first_name: "Amy",
      last_name: "Lee",
 
      dob:{
        day:1,
        month:1,
        year:1901,
      },

      address: {
        city: "Winnipeg",
        line1: "address_full_match",
        postal_code : "R3E 5S6",
        state: "Manitoba",
      },

      email:"amy.lee@gmail.com",
      phone:"5489896152",
      relationship:{
        owner:true,
        title:"CEO",
      }
    },
    tos_acceptance:{
      date: Math.floor(1707090696267 / 1000),
      ip: "0.0.0.0"
  }



  });

  
  console.log(account);
}


testFunction();
