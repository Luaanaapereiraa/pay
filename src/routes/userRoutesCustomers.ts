import asaasService from '../services/asaasService';

interface UserProfile {
  name: string;
  email: string;
  cpfCnpj: string;

}

interface NewUser {
  name: string;
  cpfCnpj: string;
}


const getUserProfile = async (): Promise<UserProfile[]> => {
  try {
    const response = await asaasService.get('/customers');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const postUserProfile = async (newUser: NewUser): Promise<UserProfile> => {
  try {
    const response = await asaasService.post('/customers', newUser);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const putUserProfile = async (id: string, updatedUser: NewUser): Promise<UserProfile> => {
  try {
    const response = await asaasService.put(`/customers/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  getUserProfile,
  postUserProfile,
  putUserProfile
};
