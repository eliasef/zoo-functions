const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste se a função retorna undefined caso não passe nenhum parâmetro', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Teste se ao passar nenhum parâmetro, retorna um objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: {
        open: 8,
        close: 6,
      },
      Wednesday: {
        open: 8,
        close: 6,
      },
      Thursday: {
        open: 10,
        close: 8,
      },
      Friday: {
        open: 10,
        close: 8,
      },
      Saturday: {
        open: 8,
        close: 10,
      },
      Sunday: {
        open: 8,
        close: 8,
      },
      Monday: {
        open: 0,
        close: 0,
      },
    });
  });
  it('Teste se ao passar Monday e 9:00 AM retorna que o Zoo está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Teste se ao passar Tuesday e 9:00 AM retorna que o Zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Teste se ao passar Wednesday e 9:00 AM retorna que o Zoo está fechado', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Teste se ao não passar AM e PM retorna um erro', () => {
    function testAbbreviation() {
      getOpeningHours('Friday', '09:00-ZM');
    }
    expect(testAbbreviation).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Teste se ao não passar números de hora retorna um erro', () => {
    function testErrorHour() {
      getOpeningHours('Saturday', 'C9:00-AM');
    }
    expect(testErrorHour).toThrowError('The hour should represent a number');
  });
  it('Para os argumentos "Sunday" e "09-c0-AM" deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    function testErrorMinute() {
      getOpeningHours('Sunday', '09:c0-AM');
    }
    expect(testErrorMinute).toThrowError('The minutes should represent a number');
  });
  it('Para os argumentos `Sunday` e `13:00-AM` deve lançar uma exceção com a mensagem: `The hour must be between 0 and 12`', () => {
    function testValueHour() {
      getOpeningHours('Monday', '13:00-AM');
    }
    expect(testValueHour).toThrowError('The hour must be between 0 and 12');
  });
  it('Para os argumentos `Tuesday` e `09:60-AM` deve lançar uma exceção com a mensagem: `The minutes must be between 0 and 59`', () => {
    function testValueMinute() {
      getOpeningHours('Tuesday', '09:60-AM');
    }
    expect(testValueMinute).toThrowError('The minutes must be between 0 and 59');
  });
  it('Para os argumentos `Thu` e `09:00-AM` deve lançar uma exceção com a mensagem: `The day must be valid. Exemplo: Monday`', () => {
    function testGetOpeningHours() {
      getOpeningHours('Thu', '09:00-AM');
    }
    expect(testGetOpeningHours).toThrowError('The day must be valid. Example: Monday');
  });
});
