const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const retorno = data.species.find((specie) => animal === specie.name);

  const resultado = retorno.residents.every((elemento) => elemento.age >= age);

  return resultado;
}

module.exports = getAnimalsOlderThan;
