
const stripe = require('stripe')('sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty');

const externalAccount = await stripe.accounts.createExternalAccount(
    'acct_1032D82eZvKYlo2C',
    {
      external_account: 'btok_1NAiJy2eZvKYlo2Cnh6bIs9c',
    }
  );