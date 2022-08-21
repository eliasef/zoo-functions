const {
  prices,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

//  const expected = { adult: 2, child: 3, senior: 1 };

// child: são pessoas menores de 18 anos;

// adult: são pessoas com idade maior ou igual a 18 anos e menor que 50 anos;

// senior: são pessoas com idade maior ou igual a 50 anos.

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18).length;

  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;

  const senior = entrants.filter((element) => element.age >= 50).length;

  return {
    adult,
    child,
    senior,
  };
}
//  const { residents } = species.find((specie) => specie.name === animal.specie);

function calculateEntry(entrants) {
  if (!entrants || !entrants[0]) {
    return 0;
  }

  const visitantes = countEntrants(entrants);

  return visitantes.child * prices.child + visitantes.adult
  * prices.adult + visitantes.senior * prices.senior;
}

module.exports = {
  calculateEntry,
  countEntrants,
};
