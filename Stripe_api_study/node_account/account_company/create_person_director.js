const stripe = require('stripe')('sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty');
const testFunction = async () => {
    const person = await stripe.accounts.createPerson
    ('acct_1OvArBPDdxGB0fxC',
    {
        email:"SDF@qq.com",
        first_name:'SDF',
        last_name:'Cat',
        id_number:'123456781',     //social insurance number in Canada
        relationship:{
            director:true,
        }
    }
    );
    console.log(person);
}


testFunction();