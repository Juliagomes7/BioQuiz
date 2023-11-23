import { fetchData } from "./getData.js"; // Importando a funcao do outro arquivo (Importante usar o type module na source do HTML)

const perguntaContainer = document.querySelector(".per");

// Funcao que precisa ser async porque ela carrega dados com base em uma promise
async function carregarPerguntas() {
  const dados = await fetchData(); // Chamada da funcao e instanciacao da variavel

  const pergunta = dados.perguntas[0]; // Pega os dados do vetor de perguntas de dentro do elemento anterior

  perguntaContainer.innerHTML = `<p>${pergunta.enunciado}</p>`; // Mostra os dados no HTML atraves
}

carregarPerguntas(); // Chamada da funcao
