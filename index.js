const buscarTemperaturaCidade = async (nomeDaCidade) => {
  const urlBase = "http://api.weatherapi.com/v1";
  const metodo = "/current.json";
  const apiKey = "7fd89369164a44f29d4113450230402";

  const dadosCidade = await fetch(
    `${urlBase}
${metodo}?q=${nomeDaCidade}
&key=${apiKey}&days=5&lang=pt`,
    { mode: "cors" }
  );
  const cidadeInformacao = await dadosCidade.json();
  return cidadeInformacao;
};

const addInner = (element) => {
  const nomeCidadeEl = document.getElementById(element.tag); // PEGAR HTML
  nomeCidadeEl.innerHTML = element.valor;
};

const chamarApi = async () => {
  const valor = document.getElementById("cidadeInput");
  const tempoAtual = await buscarTemperaturaCidade(valor.value);
  
  const elements = [
    { tag: "nome", valor: tempoAtual.location.name },
    { tag: "temperatura", valor: tempoAtual.current.temp_c },
    { tag: "regiao", valor: tempoAtual.location.region },
  ];

  for (let i = 0; i < elements.length; i++) {
    addInner(elements[i]);
  }
};
