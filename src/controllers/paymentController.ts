
import asaasService from '../services/asaasService';

interface PaymentRequestBody {
  customer: string;
  billingType: string;
  value: number;
  dueDate: string;
  installmentCount: number;
  installmentValue: number;
}

const postPayment = async (body: PaymentRequestBody): Promise<any> => {
  try {
    const response = await asaasService.post('/payments', body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { postPayment };
