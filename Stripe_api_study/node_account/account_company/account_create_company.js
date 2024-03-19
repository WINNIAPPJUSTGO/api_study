const stripe = require('stripe')('sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty');


const testFunction = async () => {
  const account = await stripe.accounts.create({
    type: 'custom',
    country: 'CA',
    email: 'mary.rosen@example.com',

    business_type: 'company',
    
    capabilities: {
      card_payments: {
        requested: true,
      },
      transfers: {
        requested: true,
      },
    },
    business_profile:
    {
        mcc:5734,                      
        //MCC 用于按企业提供的商品或服务类型对企业进行分类。每个 Stripe 账户只有一个 MCC。
        //由于咱们使用的是手动设置模式，stripe不会自动生成MCC，是否所有商店都用统一的计算机软件商店：5734 ？
        //如果否，stripe提供了mcc查询表，但是需要设置Connect Onboarding查询。
        product_description:"Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.",
        support_phone:"5454896154",
        url: "https://dev.winni.app",
    },
    company: 
    {
        address: {
            city: "Winnipeg",
            line1: "ABC Address line 2",
            postal_code : "R3E 5S2",
            state: "Manitoba",
        },
        
        name: "Apple Store",
        phone:"2789095152",
        tax_id:"123456789",                              //Business Number (BN)是九位
        directors_provided:true,
        owners_provided:true,
        
    },
  /*  representative:
    {
        address:
        {
            city:"Winnipeg",
        }
    },  */
    external_account:{
        account_number:"000000000009",
        country:"CA",
        currency:"CAD",
        object:"bank_account",
        routing_number:11000000
    },
    tos_acceptance:
        {
            date: Math.floor(1707090696267 / 1000),
            ip: "0.0.0.0"
        }


  });

  
  console.log(account);
}


testFunction();
