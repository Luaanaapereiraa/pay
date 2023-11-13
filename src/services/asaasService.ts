import axios, { AxiosInstance } from 'axios';
import 'dotenv/config'


const BASE_URL = 'https://sandbox.asaas.com/api/v3';

const asaasService: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    'access_token': process.env.ASAAS_API_KEY || ''
  },
});
console.log("Senha", process.env.ASAAS_API_KEY);

export default asaasService;
