
import asaasService from '../services/asaasService';

interface Payments {
  customer: string;
  billingType: string;
  status: string;
  subscription: string;
  installment: string;
  externalReference: string;
  paymentDate: string;
  invoiceStatus: string;
  pixQrCodeId: string;
  anticipated: boolean;
  offset: 0;
  limit: 20;
}
interface PaymentRequestBody {
  customer: string;
  billingType: string;
  value: number;
  dueDate: string;
  installmentCount: number;
  installmentValue: number;
}

const getPayments = async (): Promise<Payments[]> => {
  try {
    const response = await asaasService.get('/payments'); 
    return response.data;
  } catch (error) {
    throw error;
  }
};


const postPayment = async (body: PaymentRequestBody): Promise<any> => {
  try {
    const response = await asaasService.post('/payments', body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getPayments, postPayment };
