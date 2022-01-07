const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const criança = entrants.filter((elemento) => elemento.age < 18);
  const adultos = entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50);
  const idosos = entrants.filter((elemento) => elemento.age >= 50);

  return { adult: adultos.length, child: criança.length, senior: idosos.length };
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) return 0;
  const visitantes = countEntrants(entrants);
  const { adult: adultos, child: crianca, senior: idosos } = visitantes;
  const { prices } = data;
  const { adult, senior, child } = prices;

  const valorTotal = (adult * adultos) + (senior * idosos) + (child * crianca);
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
