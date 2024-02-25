
const stripe = require('stripe')('sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty');
const testFunction = async () => {    
    const externalAccount = await stripe.accounts.createExternalAccount(
    'acct_1OgEeTPKR8pAtt9x',
        {
            external_account: "tok_visa_debit",
        }
    );
    console.log(externalAccount);
};

  testFunction();