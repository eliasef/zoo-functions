const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste se a função retorna undefined caso não passe nenhum parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Teste se caso o parâmetro não seja uma string, retorna: "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(20)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Teste se passar o parâmetro name, retorna o valor "elephants".', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
  it('Teste se passar o parâmetro "count", retorna a quantidade de elefantes.', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Teste se ao passar o parâmetro "names", retorna o nome dos elefantes residentes.', () => {
    const esperado = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(esperado);
  });
  it('Teste se ao passar o parâmetro "averageAge" retorna a média aritimética dos elefantes residentes.', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Teste se ao passar o parâmetro como string vazia, ou alguma chave não existe no objeto retorna null', () => {
    expect(handlerElephants('')).toBe(null);
  });
});
