const buscarTemperaturaCidade = async (nomeDaCidade) => {
  const dadosCidade = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?q=${nomeDaCidade}&key=7fd89369164a44f29d4113450230402&days=5&lang=pt`,
    { mode: "cors" }
  );

  const cidadeInformacao = await dadosCidade.json();
  return cidadeInformacao;
};

const apiFetchCidade = () => {};

const buscarCidade = async () => {
  const infoCity = await buscarTemperaturaCidade("maria da fe");
  console.log(infoCity); // {JSON válido}
};
