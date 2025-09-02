const Utilitarios = require('../src/utilitarios');
const { somar, diminuir, multiplicar, dividir } = require("../src/utilitarios")


describe('Testes da classe utilitarios', () => {
    let util;

    beforeEach(() => {
        util = new Utilitarios();
    });

    describe('Utilitarios - Funções de string', () => {
        test('inverterString', () => {
          expect(util.inverterString('abc')).toBe('cba');
        });
      
        test('contarCaracteres', () => {
          expect(util.contarCaracteres('abc')).toBe(3);
        });
      
        test('Deve mover para Maiusculas', () => {
          expect(util.paraMaiusculas('abc')).toBe('ABC');
        });
      
        test('Deve mover para Minusculas', () => {
          expect(util.paraMinusculas('ABC')).toBe('abc');
        });
      
        test('Primeira para Letra Maiuscula', () => {
          expect(util.primeiraLetraMaiuscula('teste')).toBe('Teste');
        });
      
        test('Remover Os Espacos', () => {
          expect(util.removerEspacos('  abc  ')).toBe('abc');
        });
      
        test('Repetir Texto', () => {
          expect(util.repetirTexto('a', 3)).toBe('aaa');
        });
      
        test('Contador de palavras', () => {
          expect(util.contarPalavras('Olá mundo aqui')).toBe(3);
        });
      
        test('Verificar se é palindromo', () => {
          expect(util.ehPalindromo('Ame a ema')).toBe(true);
          expect(util.ehPalindromo('teste')).toBe(false);
        });
      });

    

    test("Somar dois valores válidos", async () => {
    console.log("test")
    expect(util.somar(5, 10)).toStrictEqual(15);  
  });
  
    test("Diminuir dois valores válidos", async () => {
    expect(util.subtrair(20, 10)).toStrictEqual(10);
  });
  
    test("Multiplicar dois valores válidos", async () => {
    expect(util.multiplicar(5, 10)).toStrictEqual(50);
  });
  
    test("Dividir dois valores válidos", async () => {
    expect(util.dividir(20, 10)).toStrictEqual(2);
  });
    test('ehPar', () => {
    expect(util.ehPar(4)).toBe(true);
    expect(util.ehPar(5)).toBe(false);
  });

    test('mediaArray', () => {
    expect(util.mediaArray([1, 2, 3])).toBe(2);
    expect(util.mediaArray([])).toBe(0);
  });

  test('ehPar', () => {
    expect(util.ehPar(4)).toBe(true);
    expect(util.ehPar(5)).toBe(false);
  });

  test('gerarNumeroAleatorio', () => {
    const num = util.gerarNumeroAleatorio(50);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(50);
  });

  test('ehNumero', () => {
    expect(util.ehNumero(5)).toBe(true);
    expect(util.ehNumero('5')).toBe(false);
    expect(util.ehNumero(NaN)).toBe(false);
  });
});

describe('Utilitarios - Funções de array', () => {
  const arr = [3, 1, 2, 2];

  test('primeiroElemento', () => {
    expect(util.primeiroElemento(arr)).toBe(3);
  });

  test('ultimoElemento', () => {
    expect(util.ultimoElemento(arr)).toBe(2);
  });

  test('tamanhoArray', () => {
    expect(util.tamanhoArray(arr)).toBe(4);
  });

  test('ordenarArray', () => {
    expect(util.ordenarArray(arr)).toEqual([1, 2, 2, 3]);
  });

  test('inverterArray', () => {
    expect(util.inverterArray(arr)).toEqual([2, 2, 1, 3]);
  });

  test('mediaArray', () => {
    expect(util.mediaArray([1, 2, 3, 4])).toBe(2.5);
    expect(util.mediaArray([])).toBe(0);
  });

  test('removerDuplicados', () => {
    expect(util.removerDuplicados(arr)).toEqual([3, 1, 2]);
  });

  test('juntarArray', () => {
    expect(util.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
    expect(util.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
  });
});

describe('Utilitarios - Funções com objetos', () => {
  test('mesclarObjetos', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    expect(util.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2 });
  });
});