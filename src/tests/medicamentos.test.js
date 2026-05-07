const {
  adicionarMedicamento
} = require("../medicamentos");

describe("Medicamentos", () => {
  test("Deve adicionar medicamento válido", () => {
    expect(() => {
      adicionarMedicamento("Dipirona", "08:00");
    }).not.toThrow();
  });

  test("Não deve aceitar nome vazio", () => {
    expect(() => {
      adicionarMedicamento("", "08:00");
    }).toThrow("Nome inválido.");
  });

  test("Não deve aceitar apenas espaços", () => {
    expect(() => {
      adicionarMedicamento("   ", "08:00");
    }).toThrow("Nome inválido.");
  });
});