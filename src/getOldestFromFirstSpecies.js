const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstId = employees.find((employer) => employer.id === id)
    .responsibleFor.find((element) => element);

  const { residents } = species.find((specie) => specie.id === firstId);

  const oldest = residents.reduce((acc, elem) => {
    if (elem.age > acc.age) {
      return elem;
    }
    return acc;
  }, residents[0]);

  return [oldest.name, oldest.sex, oldest.age];
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
