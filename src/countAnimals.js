const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const todos = species.reduce((acc, elemento) => (
    { ...acc, [elemento.name]: elemento.residents.length }), {});
  if (animal === undefined) {
    return todos;
  }
  const nomeAnimal = animal.specie;
  const especie = species.find((elemento) => elemento.name === nomeAnimal);
  const entradas = Object.keys(animal);
  const quantPorSexo = especie.residents.reduce((acc, element) => {
    if (element.sex === animal.sex) {
      return acc + 1;
    }
    return acc;
  }, 0);
  if (entradas.length === 2) {
    return quantPorSexo;
  }
  return todos[nomeAnimal];
}

module.exports = countAnimals;
