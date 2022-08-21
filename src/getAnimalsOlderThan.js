const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.filter((specie) => specie.name === animal)[0]
    .residents.every((resident) => resident.age >= age);
}

console.log(getAnimalsOlderThan('tigers', 18));

module.exports = getAnimalsOlderThan;
