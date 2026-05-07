const axios = require("axios");

async function obterHorarioAtual() {

  try {

    const response = await axios.get(
      "https://worldtimeapi.org/api/timezone/America/Sao_Paulo"
    );

    return response.data.datetime;

  } catch (error) {

    throw new Error("Erro ao obter horário da API.");
  }
}

module.exports = {
  obterHorarioAtual
};