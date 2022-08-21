const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function residentsOfAnimals(animal) {

  const { residents } = species.find((specie) => specie.name === animal)

  return residents.map((element) => {
    return element.name
  })
}

function animalsForRegionAndName(region) {
  const animalsForRegion = species.filter((specie) => {
    return specie.location === region
  }).map((element) => {
    return element.name
  })

  return animalsForRegion.reduce((acc, elem) => {
    acc.push({ [elem]: residentsOfAnimals(elem) })
    return acc
  }, [])
}

function animalsForRegion(region) {
  return species.filter((specie) => {
    return specie.location === region
  }).map((element) => {
    return element.name
  })
}

function sorted(options) {
  if(options.sorted) {
    const allLocations = species.map((specie) => {
      return specie.location
    })
    const object = allLocations.reduce((acc, elem) => {
      acc[elem] = animalsForRegionAndName(elem)
      return acc
    }, {})
    return object
  }
}

console.log(sorted({ includeNames: true, sorted: true }).NE)


function getAnimalMap(options) {

  const allLocations = species.map((specie) => {
    return specie.location
  })
 
  if(!options || options.sex === 'female') {
    const object = allLocations.reduce((acc, elem) => {
      acc[elem] = animalsForRegion(elem)
      return acc
    }, {})
    return object
  }

  if(options.includeNames === true) {
    const object = allLocations.reduce((acc, elem) => {
      acc[elem] = animalsForRegionAndName(elem)
      return acc
    }, {})
    return object
  }

}

module.exports = getAnimalMap;