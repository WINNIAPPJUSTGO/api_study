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
            front:'file_identity_document_success',
          },
          //verification document liveness 
          additional_document:{
            front:'file_identity_document_success',
          }
        },
      },
      business_profile:{
        mcc: '5734',
      },
    }

    );
  
    console.log(account);
  
  };
  
  testFunction();
  