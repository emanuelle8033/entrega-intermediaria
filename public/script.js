async function carregarMedicamentos() {
    const resposta = await fetch('/api/medicamentos');
    const medicamentos = await resposta.json();

    const lista = document.getElementById('listaMedicamentos');
    lista.innerHTML = '';

    medicamentos.forEach(m => {
        const li = document.createElement('li');

        li.textContent =
            `${m.nome} - ${m.dosagem} - ${m.horario}`;

        lista.appendChild(li);
    });
}

document
    .getElementById('medForm')
    .addEventListener('submit', async (e) => {

        e.preventDefault();

        await fetch('/api/medicamentos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome.value,
                dosagem: dosagem.value,
                horario: horario.value,
                observacoes: observacoes.value
            })
        });

        carregarMedicamentos();
    });

carregarMedicamentos();