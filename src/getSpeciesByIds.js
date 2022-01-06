const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((acumulador, elemento) => {
    const selecao = data.species.filter((element2) => element2.id === elemento);
    const achado = selecao[0];
    acumulador.push(achado);
    return acumulador;
  }, []);
}

module.exports = getSpeciesByIds;
