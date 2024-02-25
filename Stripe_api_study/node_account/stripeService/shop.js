const stripe = require("stripe")("sk_test_51K10IEABJaSnqIjxILUT3ur2xRH2EuahRzUc6Vqff75zUNn9j3W3R4QZefdfErGm5DWDFEPEfwULI3Gua26coW2Z00R9gBk9ty");
const fs = require("fs");
const fp_front = fs.readFileSync("./picture/verification_document/test_code1.png");
const fp_back = fs.readFileSync("./picture/verification_document/test_code2.png");

/**
 * 创建账户
 * @param {} params 
 * @returns 
 */
const createAccount = async (params) => {
  // ================= 用户传进来的东西 =================
  const {
    type = "custom",
    country = "CA",
    email,
    business_type = "individual",
    address, // {city, line1, postal_code, state}
    dob, // {day, month, year}
    first_name,
    last_name,
    bank_routing_number,
    bank_account_number,
    //
  } = params;

  // ================= 创建用户 =================
  const account = await stripe.accounts.create({
    type,
    country,
    email,
    business_type,
    capabilities: {
      card_payments: {
        requested: true,
      },
      transfers: {
        requested: true,
      },
    },
    individual: {
      address,
      dob,
      first_name,
      last_name,
    },
  });

  // 从stripe传回的account信息里获取id
  const accountId = account.id;

  // ================= 创建银行账号 =================
  const externalAccount = await stripe.accounts.createExternalAccount(accountId, {
    external_account: {
      object: "bank_account",
      country: "CA", // 加拿大
      currency: "cad", // 加拿大元
      routing_number: bank_routing_number, // 加拿大银行路由号码
      account_number: bank_account_number, // 银行账户号码
    },
  });

  // 从stripe传回的externalAccount信息里获取id
  const externalAccountId = externalAccount.id;

  // ================= 上传证件照正反面 =================
  const uploadFront = await stripe.files.create({
    file: {
      data: fp_front,
      name: "test_code1.png",
      type: "application.octet-stream",
    },
    purpose: "identity_document",
  });

  const uploadBack = await stripe.files.create({
    file: {
      data: fp_back,
      name: "test_code2.png",
      type: "application.octet-stream",
    },
    purpose: "identity_document",
  });

  // 从stripe传回的upload信息里获取id
  const uploadFrontId = uploadFront.id;
  const uploadBackId = uploadBack.id;

  // ================= update 用户的证件照 =================
  await stripe.accounts.update(accountId, {
    individual: {
      verification: {
        document: {
          back: uploadBackId,
          front: uploadFrontId,
        },
      },
    },
  });

  return { account, externalAccountId };
};

// 测试
createAccount({
  email: "zluo@winni.app",
  address: {
    city: "Winnipeg",
    line1: "ABC Address line 1",
    postal_code: "R3E 5S6",
    state: "Manitoba",
  },
  dob: {
    day: 23,
    month: 9,
    year: 1995,
  },
  first_name: "Zhaoping",
  last_name: "Luo",
  bank_routing_number: "11000-000",
  bank_account_number: "000123456789",
})