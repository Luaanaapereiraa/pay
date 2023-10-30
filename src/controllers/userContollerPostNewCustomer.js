console.log('Executando userController...');
const { postUserProfile } = require('../routes/userRoutesCustomers');

const executeControllerNew = async () => {
  try {
    const userProfile = await postUserProfile();

    console.log('Resultado:', userProfile);
  } catch (error) {
    console.error('Erro:', error);
  }
};

executeControllerNew();