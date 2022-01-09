const { employees, species } = require('../data/zoo_data');

function speciesName(responsavel) {
  const Z = responsavel.reduce((acc, id) => {
    const X = species.find((elemento) => elemento.id === id).name;
    return [...acc, X];
  }, []);
  return Z;
}
// function speciesLocation() {
// // next step
// }

function todosOsFuncionarios() {
  const funcionarios = employees.reduce((acc, { id, firstName, lastName, responsibleFor }) => {
    const pessoa = { id, fullName: `${firstName} ${lastName}` };
    const responsabilidades = { species: speciesName(responsibleFor) };
    const funcionario = { ...pessoa, ...responsabilidades };
    return [...acc, funcionario];
  }, []);
  return funcionarios;
}
console.log(todosOsFuncionarios());

function getEmployeesCoverage() {
  // seu código aqui
}

module.exports = getEmployeesCoverage;
