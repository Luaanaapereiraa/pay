import app from '../app';
import http from 'http';
import { postUserProfile } from '../controllers/customerController';

interface NewUser {
  name: string;
  cpfCnpj: string;
}

const newUser: NewUser = {
  name: 'User Name Test 2', 
  cpfCnpj: '403.643.468-33', 
};

const executeControllerNew = async (): Promise<void> => {
  try {
    const createdUser = await postUserProfile(newUser);

    console.log('Novo Usuário:', createdUser);
  } catch (error) {
    console.log('Tipo do Erro:', typeof error);
    console.error('Erro:', error);
  } finally {
    
    server.close(() => {
      console.log('Servidor encerrado');
    });
  }
};

const server = http.createServer(app);

server.listen(3001, async () => {
  await executeControllerNew();
});





executeControllerNew();
