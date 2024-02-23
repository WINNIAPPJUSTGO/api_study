const EasyPostClient = require('@easypost/api')

const client = new EasyPostClient(process.env.EZTK5d8422e7c1464a13a437dfa3f9d9705eaU6yzTlBn8gjSWN1ps16ew);

(async () => {
  let user;

  // Retrieve the authenticated user
  user = await client.User.retrieveMe();

  // Retrieve a child user
  user = await client.User.retrieve('user_...');

  console.log(user);
})();