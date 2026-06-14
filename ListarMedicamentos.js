const supabase = require('./database');

async function listarMedicamentos() {

    const { data, error } = await supabase
        .from('medicamentos')
        .select('*');

    if (error) throw error;

    return data;
}

module.exports = listarMedicamentos;