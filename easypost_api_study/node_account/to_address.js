const toAddress = new api.Address({
    name: "Sue's home",
    company: "Sue's home",  //有些用户不是公司，自动同步name到company
    street1: '1 E 161st St.',
    city: 'Winnipeg',
    state: 'MB',
    country: 'CA',
    zip: 'R3T 3A2',
  });
  
  toAddress.save().then(console.log);