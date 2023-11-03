import { postUserProfile } from '../routes/userRoutesCustomers';

interface NewUser {
  name: string;
  cpfCnpj: string;
}

const newUser: NewUser = {
  name: 'Teste', 
  cpfCnpj: '12312312311', 
};

const executeControllerNew = async (): Promise<void> => {
  try {
    const createdUser = await postUserProfile(newUser);

    console.log('Novo Usuário:', createdUser);
  } catch (error) {
    console.log('Tipo do Erro:', typeof error);
    console.error('Erro:', error);
  }
};



executeControllerNew();
