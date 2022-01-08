const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees } = data;
  const primeiroAnimalResponsavel = employees.find((pessoa) => pessoa.id === id).responsibleFor[0];

  const { species } = data;
  const especie = species.find((animal) => animal.id === primeiroAnimalResponsavel);
  const especieAnimais = especie.residents;

  const animalMaisVelho = especieAnimais.reduce((acc, nome) => {
    if (acc.age > nome.age) {
      return acc;
    }
    return nome;
  }, {});

  const { age, name, sex } = animalMaisVelho;
  const resultado = [name, sex, age];
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
