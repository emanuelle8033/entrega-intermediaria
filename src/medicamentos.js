const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "../data");
const FILE = path.join(DATA_DIR, "medicamentos.json");

function garantirArquivo() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }

  if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, "[]");
  }
}

function carregarMedicamentos() {
  garantirArquivo();

  const dados = fs.readFileSync(FILE);
  return JSON.parse(dados);
}

function salvarMedicamentos(medicamentos) {
  garantirArquivo();

  fs.writeFileSync(FILE, JSON.stringify(medicamentos, null, 2));
}

function adicionarMedicamento(nome, horario) {
  if (!nome || nome.trim() === "") {
    throw new Error("Nome inválido.");
  }

  const medicamentos = carregarMedicamentos();

  medicamentos.push({
    nome,
    horario,
    tomado: false
  });

  salvarMedicamentos(medicamentos);
}

function listarMedicamentos() {
  const medicamentos = carregarMedicamentos();

  if (medicamentos.length === 0) {
    console.log("Nenhum medicamento cadastrado.");
    return;
  }

  medicamentos.forEach((med, index) => {
    console.log(
      `${index + 1}. ${med.nome} - ${med.horario} - Tomado: ${med.tomado}`
    );
  });
}

module.exports = {
  adicionarMedicamento,
  listarMedicamentos
};