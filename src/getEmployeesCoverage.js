const { employees, species } = require('../data/zoo_data');

function speciesName(responsavel) { // Capta o nome das espécies
  const Z = responsavel.reduce((acc, id) => {
    const X = species.find((elemento) => elemento.id === id).name;
    return [...acc, X];
  }, []);
  return Z;
}
function speciesLocation(especies) { // Capta o local das espécies
  const Y = especies.reduce((acc, id) => {
    const X = species.find((elemento) => elemento.id === id).location;
    return [...acc, X];
  }, []);
  return Y;
}

function todosOsFuncionarios() { // Array de todos os funcionários, com id, nome completo, especies q cuida e localização das mesmas.
  const funcionarios = employees.reduce((acc, { id, firstName, lastName, responsibleFor }) => {
    const pessoa = { id, fullName: `${firstName} ${lastName}` };
    const responsabilidades = { species: speciesName(responsibleFor) };
    const locais = { locations: speciesLocation(responsibleFor) };

    const funcionario = { ...pessoa, ...responsabilidades, ...locais };

    return [...acc, funcionario];
  }, []);

  return funcionarios;
}

function funcionarioPorId(id) { // capta funcionário por um id específico
  const colaboradores = todosOsFuncionarios().find((colaborador) => id === colaborador.id);

  if (colaboradores === undefined) {
    throw new Error('Informações inválidas');
  }
  return colaboradores;
}

function funcionarioPorNome(nome) { // capta funcionario por seu nome ou sobrenome
  const individuo = todosOsFuncionarios().find((elemento) => {
    const { fullName } = elemento;
    const nomeEsobrenome = fullName.split(' ');
    return nomeEsobrenome[0] === nome || nomeEsobrenome[1] === nome;
  });
  if (individuo === undefined) {
    throw new Error('Informações inválidas');
  }
  return individuo;
}

function getEmployeesCoverage(pessoa) {
  if (pessoa === undefined) {
    return todosOsFuncionarios();
  }

  const chaves = Object.keys(pessoa);

  if (chaves[0] === 'id') {
    return funcionarioPorId(pessoa.id);
  }

  return funcionarioPorNome(pessoa.name);
}

module.exports = getEmployeesCoverage;
