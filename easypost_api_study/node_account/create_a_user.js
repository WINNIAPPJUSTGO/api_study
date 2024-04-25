const EasyPostClient = require("@easypost/api");

const client = new EasyPostClient(
  "EZTK5d8422e7c1464a13a437dfa3f9d9705egFFDL0xruaG3uXanf488Yg"
);
//需要使用非测试的api key。
const testFunction = async () => {
  const user = await client.User.create({
    name: "Test 1",
  });

  console.log(user);
};
testFunction();
