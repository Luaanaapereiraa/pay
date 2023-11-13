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

const executeControllerUpdate = async (): Promise<void> => {
  try {
    const alterUser = await putUserProfile(userId, updatedUser);

    console.log('Usuário Atualizado:', alterUser);
  } catch (error) {
    console.log('Tipo do Erro:', typeof error);
    console.error('Erro:', error);
  }
};

executeControllerUpdate();
