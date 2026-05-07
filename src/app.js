const readline = require("readline");

const {
  adicionarMedicamento,
  listarMedicamentos
} = require("./medicamentos");

const {
  obterHorarioAtual
} = require("./api");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("\n==== MEDCONTROL CLI ====");
  console.log("1 - Adicionar medicamento");
  console.log("2 - Listar medicamentos");
  console.log("3 - Ver horário atual");
  console.log("4 - Sair");

  rl.question("\nEscolha uma opção: ", async (opcao) => {
    switch (opcao) {

      case "1":
        rl.question("Nome do medicamento: ", (nome) => {

          rl.question("Horário do medicamento (HH:MM): ", (horario) => {

            try {
              adicionarMedicamento(nome, horario);

              console.log("\nMedicamento adicionado com sucesso!");

            } catch (error) {

              console.log(`\nErro: ${error.message}`);
            }

            menu();
          });
        });

        break;

      case "2":

        console.log("\n=== LISTA DE MEDICAMENTOS ===");

        listarMedicamentos();

        menu();

        break;

      case "3":

        console.log("\nConsultando horário atual...\n");

        try {

          const horarioAtual = await obterHorarioAtual();

          console.log("Horário atual obtido pela API:");
          console.log(horarioAtual);

        } catch (error) {

          console.log(`Erro: ${error.message}`);
        }

        menu();

        break;

      case "4":

        console.log("\nEncerrando sistema...");
        rl.close();

        break;

      default:

        console.log("\nOpção inválida.");

        menu();
    }
  });
}

menu();