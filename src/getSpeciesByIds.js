const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  return data.species.filter((element2) => element2.id === ids);
}

module.exports = getSpeciesByIds;
