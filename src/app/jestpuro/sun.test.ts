import { sum } from './sun';

describe('Função sum', () => {
  it('deve retornar 8 quando somar 4 + 4', () => {
    expect(sum(4, 4)).toBe(8);
  });

  it('deve retornar 0 quando somar -2 + 2', () => {
    expect(sum(-2, 2)).toBe(0);
  });

  it('deve retornar um número negativo corretamente', () => {
    expect(sum(-5, -3)).toBe(-8);
  });
});
