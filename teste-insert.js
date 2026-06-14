const cadastrarMedicamento = require('./SalvarMedicamentos');

async function teste() {
  const resultado = await cadastrarMedicamento(
    'Paracetamol',
    '500mg',
    '08:00',
    'Tomar após o café'
  );

  console.log(resultado);
}

teste();