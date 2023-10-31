const asaasService = require('../services/asaasService');


const body = {
    "customer": "cus_000005765029",
    "billingType": "BOLETO",
    "value": 2000.00,
    "dueDate": "2023-11-21",
    "installmentCount": 10,
    "installmentValue": 200.00 

};

const postPayment = async () => {
  try {
    const response = await asaasService.post('/payments', body );
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  postPayment
};