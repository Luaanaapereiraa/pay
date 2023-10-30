require('dotenv').config();
const axios = require('axios');
const  asaasApiKey  = '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNjgyODE6OiRhYWNoXzUwMWI5NmE1LWI1ZjctNGU4YS05MTRjLTM2NzRjZGM1NjY1YQ==';


console.log('Chave de API:', asaasApiKey);
const BASE_URL = 'https://sandbox.asaas.com/api/v3';


const asaasService = axios.create({
    baseURL: BASE_URL,
    headers: {
      'accept': 'application/json',
      'access_token': asaasApiKey, 
    },
  });
 

  
  module.exports = asaasService;