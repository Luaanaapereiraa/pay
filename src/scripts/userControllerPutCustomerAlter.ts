import app from '../app';
import { Request, Response } from 'express';
import http from 'http';
import { putUserProfile } from '../controllers/customerController';

interface NewUser {
  name: string;
  cpfCnpj: string;
}

const updatedUser: NewUser = {
  name: 'TesteAlteracao2',
  cpfCnpj: '12312312311',
};

const userId = 'cus_000005765029';

const server = http.createServer(app);

server.listen(3000, async () => {
  try {
    const req = { params: { id: userId } } as unknown as Request;
    const res = {} as Response;
    await putUserProfile(userId, updatedUser);

    console.log('Usuário Atualizado');
  } catch (error) {
    console.log('Tipo do Erro:', typeof error);
    console.error('Erro:', error);
  } finally {
    // Encerre o servidor após a execução do script
    server.close(() => {
      console.log('Servidor encerrado');
    });
  }
});
