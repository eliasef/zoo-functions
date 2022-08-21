const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return ids.map((id) => species.find((specie) => id === specie.id));
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;

// function getSpeciesByIds(...ids) {
//   if (!ids) {
//     return [];
//   }
//   return species.filter((specie) => {
//     for (let i = 0; i < ids.length; i += 1) {
//       if (ids[i] === specie.id) {
//         return specie;
//       }
//     }
//   });
// }
