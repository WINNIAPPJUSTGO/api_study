const stripe = require('stripe')(
  'sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty'
);

const testFunction = async () => {
  const externalAccount = await stripe.accounts.createExternalAccount
  (
      'acct_1P1ex9PE7tx35zHG',
      {
        external_account:{
          account_number:"000000000009",
          country:"CA",
          currency:"CAD",
          object:"bank_account",
          routing_number:11000000
        }
      }
  );
    console.log(externalAccount);
};

  testFunction();