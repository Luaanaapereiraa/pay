console.log('Executando userController...');
const { getUserProfile } = require('../routes/userRoutesCustomers');

const executeControllerList = async () => {
  try {
    const userProfile = await getUserProfile();
    console.log('Resultado:', userProfile);
  } catch (error) {
    console.error('Erro:', error);
  }
};

executeControllerList();