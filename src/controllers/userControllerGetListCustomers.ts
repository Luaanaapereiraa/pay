import { getUserProfile } from '../routes/userRoutesCustomers';

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
  }
};

executeControllerList();
