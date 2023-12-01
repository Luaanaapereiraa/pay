import { Request, Response } from 'express';
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
    console.error(error);
    throw error;
  }
};

export const putUserProfile = async (userId: string, updatedUser: NewUser): Promise<any> => {
    try {
      const response = await asaasService.put(`/customers/${userId}`, updatedUser);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
