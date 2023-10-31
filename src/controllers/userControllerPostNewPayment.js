console.log('Executando userController...');
const { postPayment } = require('../routes/useRoutesPayments');


const executeControllerNew = async () => {
  try {
    const payment = await postPayment();

    console.log('Resultado:', payment);
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      console.error('Erros:', error.response.data.errors);
    } else {
      console.error('Erro:', error);

    }
  }
};

executeControllerNew();

