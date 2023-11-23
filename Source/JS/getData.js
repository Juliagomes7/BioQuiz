// -----------------------------------------------------------
// Funcao que pega os dados do arquivo dados.json e retorna
// para outra variavel. Essa funcao e exportada para outro
// arquivo JS que efetivamente usa esses dados
// -----------------------------------------------------------

export async function fetchData() {
  try {
    const response = await fetch("../Data/dados.json");
    if (!response.ok) {
      throw new Error("Erro ao carregar os dados");
    }

    return await response.json();
  } catch (erro) {
    console.error("Ocorreu um erro: ", erro);
    return null;
  }
}


