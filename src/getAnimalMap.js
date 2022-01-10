const { species } = require('../data/zoo_data');

function animalRegiao(local) {
  const localizacao = species.filter((animalLocal) => animalLocal.location === local);
  const nomeAnimal = localizacao.map((elemento) => elemento.name);
  return nomeAnimal;
}

function animaisPorRegiao() {
  const animaisRegiao = species.reduce(
    (acc, local) => ({ ...acc, [local.location]: animalRegiao(local.location) }), {},
  );
  return animaisRegiao;
}
// fim da montagem do objeto inicial, que tem localização e nomes dos animais naquele local

function animalNames(animal) {
  const primeiroPasso = species.find((element) => element.name === animal);
  const { residents } = primeiroPasso;
  const segundoPasso = residents.map((element) => element.name);
  return segundoPasso;
}

function animaisComNomePorRegiao(options) {
  if (options.sorted) {
    return species.reduce((acc, local) => {
      const obj = animalRegiao(local.location).map(
        (elemento) => ({ [elemento]: animalNames(elemento).sort() }),
      );
      return ({ ...acc, [local.location]: obj });
    }, {});
  }
  return species.reduce((acc, local) => {
    const obj = animalRegiao(local.location).map(
      (elemento) => ({ [elemento]: animalNames(elemento) }),
    );
    return ({ ...acc, [local.location]: obj });
  }, {});
}

// fim do desenvolvimento do objeto que possui a regiao, os animais pertencentes a ela com os nomes dos animais que constam no zoo.

function animaisPorSexo(animais, sexo) {
  const primeiroPasso = species.find((element) => element.name === animais);
  const { residents } = primeiroPasso;
  const segundoPasso = residents.filter((element) => element.sex === sexo);
  const terceiroPasso = segundoPasso.map((element) => element.name);
  return terceiroPasso;
}

function animaisComNomePorSexo(animalSex, options) {
  if (options.sorted === true) {
    return species.reduce((acc, local) => {
      const obj = animalRegiao(local.location).map(
        (elemento) => ({ [elemento]: animaisPorSexo(elemento, animalSex).sort() }),
      );
      return ({ ...acc, [local.location]: obj });
    }, {});
  }
  return species.reduce((acc, local) => {
    const obj = animalRegiao(local.location).map(
      (elemento) => ({ [elemento]: animaisPorSexo(elemento, animalSex) }),
    );
    return ({ ...acc, [local.location]: obj });
  }, {});
}
// fim do desenvolvimento para conseguir o nome do animal por sexo

function test(options) {
  if (options.includeNames && options.sex) return animaisComNomePorSexo(options.sex, options);
  if (options.includeNames) return animaisComNomePorRegiao(options);
}

function getAnimalMap(options) {
  if (options === undefined || !options.includeNames) return animaisPorRegiao();

  return test(options);
}

module.exports = getAnimalMap;
