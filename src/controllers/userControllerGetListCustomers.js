console.log('Executando userController...');
const { getUserProfile } = require('../routes/userRoutes');

const executeController = async () => {
  try {
    const userProfile = await getUserProfile();
    console.log('Resultado:', userProfile);
  } catch (error) {
    console.error('Erro:', error);
  }
};

executeController();