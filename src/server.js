const express = require('express');
const listarMedicamentos = require('./ListarMedicamentos');

const app = express();

app.get('/medicamentos', async (req, res) => {
  const dados = await listarMedicamentos();
  res.json(dados);
});

app.listen(3000, () => {
  console.log('Servidor iniciado');
});