const { employees } = require('../data/zoo_data');

/* Grupo de estudos no dia 07/01/2022 */
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const manEmployees = employees.filter(({ managers }) => managers.includes(managerId));
  return manEmployees.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
