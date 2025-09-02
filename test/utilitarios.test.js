const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
  let util;

  beforeEach(() => {
    util = new Utilitarios();
  });

  describe('Funções de string', () => {
    test('inverterString', () => {
      expect(util.inverterString('abc')).toBe('cba');
    });

    test('contarCaracteres', () => {
      expect(util.contarCaracteres('abc')).toBe(3);
    });

    test('converter para maiúsculas', () => {
      expect(util.paraMaiusculas('abc')).toBe('ABC');
    });

    test('converter para minúsculas', () => {
      expect(util.paraMinusculas('ABC')).toBe('abc');
    });

    test('primeira letra maiúscula', () => {
      expect(util.primeiraLetraMaiuscula('teste')).toBe('Teste');
    });

    test('remover espaços', () => {
      expect(util.removerEspacos('  abc  ')).toBe('abc');
    });

    test('repetir texto', () => {
      expect(util.repetirTexto('a', 3)).toBe('aaa');
    });

    test('contar palavras', () => {
      expect(util.contarPalavras('Olá mundo aqui')).toBe(3);
    });

    test('verificar palíndromo', () => {
      expect(util.ehPalindromo('Ame a ema')).toBe(true);
      expect(util.ehPalindromo('teste')).toBe(false);
    });
  });

  describe('Funções matemáticas', () => {
    test('somar dois números', () => {
      expect(util.somar(5, 10)).toBe(15);
    });

    test('subtrair dois números', () => {
      expect(util.subtrair(20, 10)).toBe(10);
    });

    test('multiplicar dois números', () => {
      expect(util.multiplicar(5, 10)).toBe(50);
    });

    test('dividir dois números', () => {
      expect(util.dividir(20, 10)).toBe(2);
    });

    test('dividir por zero deve lançar erro', () => {
      expect(() => util.dividir(10, 0)).toThrow('Divisão por zero');
    });

    test('verificar se número é par', () => {
      expect(util.ehPar(4)).toBe(true);
      expect(util.ehPar(5)).toBe(false);
    });

    test('verificar se valor é número', () => {
      expect(util.ehNumero(5)).toBe(true);
      expect(util.ehNumero('5')).toBe(false);
      expect(util.ehNumero(NaN)).toBe(false);
    });

    test('calcular média de array', () => {
      expect(util.mediaArray([1, 2, 3])).toBe(2);
      expect(util.mediaArray([])).toBe(0);
    });
  });

  describe('Funções de array', () => {
    const arr = [3, 1, 2, 2];

    test('primeiro elemento do array', () => {
      expect(util.primeiroElemento(arr)).toBe(3);
    });

    test('último elemento do array', () => {
      expect(util.ultimoElemento(arr)).toBe(2);
    });

    test('tamanho do array', () => {
      expect(util.tamanhoArray(arr)).toBe(4);
    });

    test('ordenar array', () => {
      expect(util.ordenarArray(arr)).toEqual([1, 2, 2, 3]);
    });

    test('inverter array', () => {
      expect(util.inverterArray(arr)).toEqual([2, 2, 1, 3]);
    });

    test('remover duplicados do array', () => {
      expect(util.removerDuplicados(arr)).toEqual([3, 1, 2]);
    });

    test('juntar array com separador padrão', () => {
      expect(util.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
    });

    test('juntar array com separador personalizado', () => {
      expect(util.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
    });
  });

  describe('Funções com objetos', () => {
    test('mesclar dois objetos', () => {
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };
      expect(util.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2 });
    });
  });
});
