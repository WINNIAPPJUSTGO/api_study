const stripe = require('stripe')('sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty');
const testFunction = async () => {
    const person = await stripe.accounts.createPerson
    ('acct_1OvArBPDdxGB0fxC',
    {
        email:"tim@qq.com",
        first_name:'Tim',
        last_name:'Dog',
        id_number:'123456780',     //social insurance number in Canada
        relationship:{
            owner:true,
        },
        address: 
        {
        city: "Winnipeg",
        line1: "QWE Address line 2",
        postal_code : "R3C 5S6",
        state: "Manitoba",
        },
        dob:
        {
          day:23,
          month:9,
          year:1995,
        },
    }  
    );
    console.log(person);
}


testFunction();