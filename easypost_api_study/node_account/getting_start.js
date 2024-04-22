const Easypost = require('@easypost/api');
const api = new Easypost('process.env.EZTK5d8422e7c1464a13a437dfa3f9d9705egFFDL0xruaG3uXanf488Yg');

const testFunction = async () => {
  const fromAddress = await new api.Address({
      company: 'company1',
      street1: '1st Monkey Street',
      city: 'Winnipeg',
      state: 'MB',
      zip: 'R3T 5A2',
      phone: '204-456-7890',
  });

  console.log(fromAddress);

  const toAddress = await new api.Address({
    name: "Sue's home",
    company: "Sue's home",  //有些用户不是公司，自动同步name到company
    street1: '1 E 161st St.',
    city: 'Winnipeg',
    state: 'MB',
    country: 'CA',
    zip: 'R3T 3A2',
  });
  
  console.log(toAddress);

  const parcel = await new api.Parcel({
    length: 9,
    width: 6,
    height: 2,
    weight: 10,
  });
  
  console.log(parcel);
/*********************************************************************
 //easypost提供通用的运营商特定包装作为您可以使用的预定义常量。如果用户将其用于包装，则无需通过尺寸，
 //只需通过重量即可。用户可以通过在“predefined_package”参数中传递常量来执行此操作，剩下的可以全部交给easypost。

  const parcel = await new api.Parcel({
    predefined_package: 'FlatRateEnvelope',
    weight: 10,
  });
  
  console.log(parcel);  
**********************************************************************/

const shipment = await new api.Shipment({         //这部分分为shipment object 和 rates object 具体需要再看
  to_address: toAddress,            //发货人的地址，默认为 from_address，可以用ID代替eg.:from_address: { id: 'adr_...' },
  from_address: fromAddress,        //买家的地址，默认为 to_address，可以用ID代替eg.:to_address: { id: 'adr_...' },
  parcel: parcel,                   //parcel为包装的尺寸和重量的信息，可以用ID代替eg.:parcel: { id: 'prcl_...' },

});

console.log(shipment);



};
  testFunction();

