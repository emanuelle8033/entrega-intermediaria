const express = require('express');
const path = require('path');
const supabase = require('./src/database');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/api/medicamentos', async (req, res) => {

    const { data, error } = await supabase
        .from('medicamentos')
        .select('*');

    if (error) {
        return res.status(500).json(error);
    }

    res.json(data);
});

app.post('/api/medicamentos', async (req, res) => {

    const { data, error } = await supabase
        .from('medicamentos')
        .insert([req.body])
        .select();

    if (error) {
        return res.status(500).json(error);
    }

    res.json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});