const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

// { specie: 'bears', sex: 'female' }

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, elem) => {
      acc[elem.name] = elem.residents.length;
      return acc;
    }, {});
  }

  const { residents } = species.find((specie) => specie.name === animal.specie);

  if (animal.sex) {
    return residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return residents.length;
}

console.log(countAnimals({ specie: 'tigers', sex: 'female' }));

module.exports = countAnimals;
