const stripe = require("stripe")(
  "sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty"
);

const testFunction = async () => {
  const account = await stripe.accounts.update
  ("acct_1P6wrvPLHGWdUBw8", 
  {
    individual: {
      verification:
      {
        //verification document ID
        document: {
          back: 'file_identity_document_success',
          
        },
        //verification document liveness 
        additional_document:{
          back:'file_identity_document_success',
          
        }
      },
      id_number:"000000000",	
      id_number_secondary:"000000000",
      address: 
      {
        city: "Winnipeg",
        line1: "address_full_match",
        postal_code : "R3E 5S6",
        state: "Manitoba",
      },

      dob:
      {
        day:1,
        month:1,
        year:1901,
      },

      first_name: "n",
      last_name: "K",
      
    },
    
    tos_acceptance:{
        date: Math.floor(1707090696267 / 1000),
        ip: "0.0.0.0"
    },
    external_account:{
      account_number:"000000000009",
      country:"CA",
      currency:"CAD",
      object:"bank_account",
      routing_number:11000000
    },
    business_profile:{
      product_description:"This is a product description.",
      url:"https://accessible.stripe.com",
    }
  }
  );

  console.log(account);

};

testFunction();
