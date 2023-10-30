const asaasService = require('../services/asaasService');

const getUserProfile = async () => {
  try {
    const response = await asaasService.get('/customers');
    return response.data;
  } catch (error) {
    throw error;
  }
};
const postUserProfile = async () => {
  try {
    const response = await asaasService.post('/customers');
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserProfile,
  postUserProfile
};