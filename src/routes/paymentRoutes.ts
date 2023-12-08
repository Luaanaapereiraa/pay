import express, { Request, Response } from 'express';
import { postPayment, getPayments } from '../controllers/paymentController';

const router = express.Router();


//Rota para listar pagamento
router.get('/api/payments', async (req: Request, res: Response) => {
  try {
    const payments = await getPayments(); 
    res.json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro na requisição' });
  }
});


// Rota para criar um pagamento
router.post('/api/payments', async (req: Request, res: Response) => {
  try {
    const newPayment = await postPayment(req.body);
    res.json(newPayment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro na requisição' });
  }
});



export default router;
