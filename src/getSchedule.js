const { hours, species } = require('../data/zoo_data');

const weekDays = Object.keys(hours);

const texto = (dia) => {
  if (dia !== 'Monday') {
    return { officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm` };
  }
  return { officeHour: 'CLOSED' };
};

const animais = (diaSemana) => {
  const exibicao = species.filter(({ availability }) => availability.includes(diaSemana));
  const nomes = exibicao.map((element) => element.name);
  if (diaSemana !== 'Monday') {
    return { exhibition: nomes };
  }
  return { exhibition: 'The zoo will be closed!' };
};

function getSchedule(scheduleTarget) {
  const horarioFuncionamento = weekDays.reduce((acc, day) => {
    const obj = { ...texto(day), ...animais(day) };
    return { ...acc, [day]: obj };
  }, {});
  const diaSemana = weekDays.find((element) => element === scheduleTarget);
  const verficaAnimal = species.find(({ name }) => name === scheduleTarget);

  if (scheduleTarget === undefined) return horarioFuncionamento;

  if (scheduleTarget === diaSemana) {
    return ({ [scheduleTarget]: horarioFuncionamento[scheduleTarget] });
  }

  if (verficaAnimal === undefined) return horarioFuncionamento;
  const animalCerto = verficaAnimal.name;
  const animalDisponivel = species.find((elem) => elem.name === scheduleTarget).availability;

  if (scheduleTarget === animalCerto) return animalDisponivel;
}
module.exports = getSchedule;
