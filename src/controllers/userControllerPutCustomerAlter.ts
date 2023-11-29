import { Request, Response } from 'express';
import { putUserProfile } from '../routes/userRoutesCustomers';

interface NewUser {
  name: string;
  cpfCnpj: string;
}

const updatedUser: NewUser = {
  name: 'TesteAlteracao',
  cpfCnpj: '12312312311',
};

const userId = 'cus_000005765029';
const req = {} as Request; 
const res = {} as Response;

const executeControllerUpdate = async (): Promise<void> => {
  try {
     await putUserProfile(userId, req, res);
 
     console.log('Usuário Atualizado');
  } catch (error) {
     console.log('Tipo do Erro:', typeof error);
     console.error('Erro:', error);
  }
 };
 

executeControllerUpdate();
