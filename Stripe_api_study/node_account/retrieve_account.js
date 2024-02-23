const stripe = require("stripe")(
    "sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty"
  );
  
  const testFunction = async () => {
    const account = await stripe.accounts.retrieve('acct_1OgEeTPKR8pAtt9x');
  
    console.log(account);
  
  };
  
  testFunction();
  