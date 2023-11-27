
import express, { Request, Response } from 'express';
import asaasService from '../services/asaasService';

const app = express();
const PORT = 3000;
interface UserProfile {
  name: string;
  email: string;
  cpfCnpj: string;
}

interface NewUser {
  name: string;
  cpfCnpj: string;
}

app.use(express.json()); 

export const getUserProfile = async (): Promise<UserProfile[]> => {
  try {
    const response = await asaasService.get('/customers');
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const postUserProfile = async (newUser: NewUser): Promise<any> => {
  try {
    
    const response = await asaasService.post('/customers', newUser);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedUser: NewUser = req.body;
    const response = await asaasService.put(`/customers/${id}`, updatedUser);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro na requisição' });
  }
};


// Rotas
app.get('/api/user-profile', getUserProfile);
app.post('/api/user-profile', postUserProfile);
app.put('/api/user-profile/:id', putUserProfile);

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
