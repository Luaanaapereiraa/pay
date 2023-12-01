import express from 'express';
import paymentRoutes from './routes/paymentRoutes';
import customerRoutes from './routes/customerRoutes'

const app = express();
const PORT = 3000;

app.use(express.json());

//rotas do payment
app.use(paymentRoutes);
//rotas do customer
app.use(customerRoutes)

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
export default app