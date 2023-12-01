import express, { Router } from 'express';
import { getUserProfile, postUserProfile, putUserProfile } from '../controllers/customerController';

const router = Router();
const PORT = 3000;

router.get('/api/user', async (req, res) => {
  try {
    const userProfile = await getUserProfile();
    console.log('Rota principal acessada com sucesso.');
    res.json({ success: true, data: userProfile });
  } catch (error) {
    console.error('Erro na rota principal:', error);
    const errorMessage =
      typeof error === 'string'
        ? error
        : error instanceof Error
        ? error.message
        : 'Erro desconhecido';
    res.status(500).json({ success: false, error: 'Erro na requisição', details: errorMessage });
  }
});

router.post('/api/user', async (req, res) => {
  try {
    const newUser = req.body;
    const response = await postUserProfile(newUser);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro na requisição' });
  }
});

router.put('/api/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const response = await putUserProfile(userId, updatedUser);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro na requisição' });
  }
});

export default router;
