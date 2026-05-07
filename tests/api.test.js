const axios = require("axios");
const { obterHorarioAtual } = require("../src/api");

jest.mock("axios");

describe("Integração com API", () => {
  test("Deve retornar horário da API", async () => {
    axios.get.mockResolvedValue({
      data: {
        datetime: "2026-05-07T10:00:00"
      }
    });

    const resultado = await obterHorarioAtual();

    expect(resultado).toBe("2026-05-07T10:00:00");
  });

  test("Deve tratar erro da API", async () => {
    axios.get.mockRejectedValue(new Error());

    await expect(obterHorarioAtual())
      .rejects
      .toThrow("Erro ao obter horário da API.");
  });
});