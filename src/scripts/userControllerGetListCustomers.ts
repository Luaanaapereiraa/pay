import app from '../app';
import http from 'http';
import { getUserProfile } from '../controllers/customerController';

interface UserProfile {
  name: string;
  email: string;
  cpfCnpj: string;
}

const executeControllerList = async (): Promise<void> => {
  try {
    const userProfiles: UserProfile[] = await getUserProfile();
    console.log('Resultados:', userProfiles);
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
