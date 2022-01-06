const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const vazio = {};

  const funcionario = employees.find(
    (pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName,
  );

  if (employeeName === undefined) {
    return vazio;
  }
  return funcionario;
}

console.log(getEmployeeByName('Wishart'));
module.exports = getEmployeeByName;
