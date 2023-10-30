require('dotenv').config();

const asaasApiKey = process.env.ASAAS_API_KEY;

console.log(Buffer.from(asaasApiKey, 'base64').toString('ascii'));

module.exports = {
  asaasApiKey,
};
