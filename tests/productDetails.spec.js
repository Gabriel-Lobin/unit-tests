const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(productDetails('string', 'string')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    const numberArray = productDetails('string', 'string').length;
    assert.strictEqual(numberArray, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productDetails('string', 'string')), 'object')
    // Teste que os dois objetos são diferentes entre si.
    const numberObject = productDetails('String', 'String');
    const number1 = numberObject[0];
    const number2 = numberObject[1];
    assert.notStrictEqual(number1, number2);
    // Teste que os dois productIds terminam com 123.
    const confereNumber1 = number1.details.productId;
    const confereNumber2 = number2.details.productId;
    let numberTest1 = confereNumber1[confereNumber1.length - 3];
    numberTest1 += confereNumber1[confereNumber1.length - 2];
    numberTest1 += confereNumber1[confereNumber1.length - 1];
    let numberTest2 = confereNumber2[confereNumber2.length - 3];
    numberTest2 += confereNumber2[confereNumber2.length - 2];
    numberTest2 += confereNumber2[confereNumber2.length -1];
    assert.deepStrictEqual(parseInt(numberTest1), 123);
    assert.deepStrictEqual(parseInt(numberTest2), 123);
  });
});
