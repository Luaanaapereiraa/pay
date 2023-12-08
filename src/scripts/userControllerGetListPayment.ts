import app from '../app';
import http from 'http';
import { getPayments } from '../controllers/paymentController';

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

const executeControllerList = async (): Promise<void> => {
  try {
    const payments: Payments[] = await getPayments();
    console.log('Resultados:', payments);
  } catch (error) {
    console.error('Erro:', error);
  } finally {
    
    server.close(() => {
      console.log('Servidor encerrado');
    });
  }
};

const server = http.createServer(app);

server.listen(3001, async () => {
  await executeControllerList();
});
