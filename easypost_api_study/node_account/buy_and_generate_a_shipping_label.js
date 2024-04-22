const Easypost = require('@easypost/api');
const api = new Easypost('process.env.EZTK5d8422e7c1464a13a437dfa3f9d9705egFFDL0xruaG3uXanf488Yg');

const testFunction = async () => {
    const shipment = await new api.Shipment({                                  //这部分分为shipment object 和 rates object 具体需要再看
        buy:('{RATE_ID}'),   

    });

console.log(shipment);



};
  testFunction();

