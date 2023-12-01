import axios, { AxiosInstance } from 'axios';
import 'dotenv/config'


const BASE_URL = 'https://sandbox.asaas.com/api/v3';

const asaasService: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    'access_token': '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNjgyODE6OiRhYWNoXzk0MzdjZDNhLTQ2MjYtNDUwZS1iNjIzLTU1Y2MzMmQ3OTkzNg=='|| ''
  },
});


export default asaasService;
