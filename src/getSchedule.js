const {
  species,
  hours,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getDay(day) {
  if (day === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return { // se parâmetro não for domingo, traz um objeto com horários e animais
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.filter((specie) => specie.availability
      .includes(day)).map((element) => element.name),
  };
}

function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(hours);

  const allAnimals = species.map((specie) => specie.name);

  if (allAnimals.includes(scheduleTarget)) { // parâmetro seja animal > traz dias disponível dele
    return species.find((element) => element.name === scheduleTarget).availability;
  }
  // parâmetro seja dia da semana > traz horário de funcionamento e animais que tem o dia
  if (weekDays.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: getDay(scheduleTarget),
    };
  }
  // caso nenhum if seja aceito, sem parâmetro traz todos os dias, horários de funcionamento e animais de cada dia
  return weekDays.reduce((acc, element) => {
    acc[element] = getDay(element);
    return acc;
  }, {});
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
