const {
  employees,
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function employee(worker) {
  return employees.find((employee1) => employee1.firstName === worker.name
  || employee1.lastName === worker.name || employee1.id === worker.id);
}

function specie(worker) {
  return species.filter((specie1) => {
    if (!worker) {
      throw new Error('Informações inválidas');
    }
    return worker.responsibleFor.includes(specie1.id);
  });
}

function allEmployees() {
  return employees.map((employee2) => {
    const speciesArray = specie(employee2);
    return {
      id: employee2.id,
      fullName: `${employee2.firstName} ${employee2.lastName}`,
      species: speciesArray.map((element) => element.name),
      locations: speciesArray.map((element) => element.location),
    };
  });
}

function getEmployeesCoverage(worker) {
  if (!worker) {
    return allEmployees();
  }

  const employeeObject = employee(worker);
  const speciesArray = specie(employeeObject);

  return {
    id: employeeObject.id,
    fullName: `${employeeObject.firstName} ${employeeObject.lastName}`,
    species: speciesArray.map((element) => element.name),
    locations: speciesArray.map((element) => element.location),
  };
}

console.log(getEmployeesCoverage({
  id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
}));

module.exports = getEmployeesCoverage;
