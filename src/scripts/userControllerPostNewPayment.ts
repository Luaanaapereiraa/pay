import { postPayment } from '../controllers/paymentController';

interface PaymentDetails {
  // Defina os campos específicos do pagamento aqui
  // Por exemplo: id, valor, data, etc.
}

const body = {
  customer: "cus_000005798964",
  billingType: "BOLETO",
  value: 3010.00,
  dueDate: "2023-12-01",
  totalValue: 3010.00,
  installmentCount: 10,
  installmentValue: 301.00
};

const executeControllerNew = async (): Promise<void> => {
  try {
    const payment: PaymentDetails = await postPayment(body);

    console.log('Resultado:', payment);
  } catch (error) {
    const responseError = error as { response: { data: { errors: string[] } } };

    if (responseError.response && responseError.response.data && responseError.response.data.errors) {
      console.error('Erros:', responseError.response.data.errors);
    } else {
      console.error('Erro desconhecido:', error);
    }
  }
};


executeControllerNew();