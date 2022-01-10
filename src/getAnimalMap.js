const { species } = require('../data/zoo_data');

function animalRegiao(local) {
  const localizacao = species.filter((animalLocal) => animalLocal.location === local);
  const nomeAnimal = localizacao.map((elemento) => elemento.name);
  return nomeAnimal;
}

function animalNames(animal) {
  const primeiroPasso = species.find((element) => element.name === animal);
  const { residents } = primeiroPasso;
  const segundoPasso = residents.reduce((acc, elemento) => [...acc, elemento.name], []);
  return segundoPasso;
}

function animaisComNomePorRegiao() {
  return species.reduce((acc, local) => {
    const obj = animalRegiao(local.location).map(
      (elemento) => ({ [elemento]: animalNames(elemento) }),
    );
    return ({ ...acc, [local.location]: obj });
  }, {});
}

console.log(animaisComNomePorRegiao());

function animaisComNomeOrdenado() {
  return species.reduce((acc, local) => {
    const obj = animalRegiao(local.location).map(
      (elemento) => ({ [elemento]: animalNames(elemento).sort() }),
    );
    return ({ ...acc, [local.location]: obj });
  }, {});
}
console.log(animaisComNomeOrdenado());

function getAnimalMap(options) {
//   if (options === undefined || !options.includeNames) {
//     const animaisPorRegiao = species.reduce(
//       (acc, local) => ({ ...acc, [local.location]: animalRegiao(local.location) }), {},
//     );
//     return animaisPorRegiao;
//   }
//   if (options.includeNames) return animaisComNomePorRegiao();
//   if (options.includeNames && options.sorted) return animaisComNomeOrdenado();
}

// console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
