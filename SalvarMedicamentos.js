const supabase = require('./src/database');

async function cadastrarMedicamento(
  nome,
  dosagem,
  horario,
  observacoes
) {
  const { data, error } = await supabase
    .from('medicamentos')
    .insert([
      {
        nome,
        dosagem,
        horario,
        observacoes
      }
    ])
    .select();

  if (error) {
    console.error('Erro ao inserir:', error);
    return null;
  }

  return data;
}

module.exports = cadastrarMedicamento;