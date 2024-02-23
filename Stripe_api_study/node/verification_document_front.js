const stripe = require('stripe')('sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty');
const fs = require('fs');
const fp = fs.readFileSync('D:/api_study/Stripe_api_study/node/picture/verification_document/test_code1.png'); 
const testFunction = async () => {
    const upload = await stripe.files.create({
        file: {
            data: fp,
            name: 'test_code1.png',
            type: 'application.octet-stream',
        },
        purpose: 'identity_document', 
        });
        console.log(upload);
}
    
    
    testFunction();