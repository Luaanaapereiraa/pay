console.log('Executando userController...');
const { postUserProfile } = require('../routes/userRoutesCustomers');


const executeControllerNew = async () => {
  try {
    const userProfile = await postUserProfile();

    console.log('Resultado:', userProfile);
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      console.error('Erros:', error.response.data.errors);
    } else {
      console.error('Erro:', error);
    }
  }
};

executeControllerNew();
