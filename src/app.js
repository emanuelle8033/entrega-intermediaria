const readline = require("readline");
const {
  adicionarMedicamento,
  listarMedicamentos
} = require("./medicamentos");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("\n==== MEDCONTROL ====");
  console.log("1 - Adicionar medicamento");
  console.log("2 - Listar medicamentos");
  console.log("3 - Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Nome do medicamento: ", (nome) => {
          rl.question("Horário: ", (horario) => {
            adicionarMedicamento(nome, horario);
            console.log("Medicamento adicionado!");
            menu();
          });
        });
        break;

      case "2":
        listarMedicamentos();
        menu();
        break;

      case "3":
        console.log("Saindo...");
        rl.close();
        break;

      default:
        console.log("Opção inválida.");
        menu();
    }
  });
}

menu();