/**
 * Questão 1: Soma Array. 
 * 
 * @param {number[]} lista 
 */
function somaArray(lista) {
    const maiores60Menores300 = lista.filter(numero => numero >= 60 && numero <= 300);
    const soma = maiores60Menores300.reduce((soma, valor) => soma + valor, 0);

    console.log("Questão 1: \n")
    console.log(`A lista dos valores maiores que 60 é: ${maiores60Menores300}.`);
    console.log(`A soma dos elementos da lista é: ${soma}.`);
}

somaArray([1, 60, 232, 7, 25, 76, 29,74, 92]);


/**
 * Questão 2: Progressão Aritmética.  
 * 
 * @param {{n: Number, a1: Number, r: Number}} data
 */
const progressaoAritmetica = ({n, a1, r}) => {
    let lista_padrao = [...Array(n)];
    const lista = lista_padrao.map((_, index) =>  a1 + (n - (index + 1)) * r);
    lista.reverse();
    
    const soma = lista.reduce((soma, valor) => soma += valor, 0);

    console.log("\n\nQuestão 2: \n")
    console.log(`${lista}`);
    console.log(`Soma da PA: ${soma}`);
}


/**
 * Questão 2: Progressão Geométrica. 
 * 
 * @param {{n: Number, a1: Number, r: Number}} data
 */
const progressaoGeometrica = ({n, a1, r}) => {
    let lista_padrao = [...Array(n)];
    const lista = lista_padrao.map((_, index) => a1 * r ** (n - index - 1));
    lista.reverse();

    const soma = lista.reduce((soma, valor) => soma += valor, 0);

    console.log("\n\nQuestão 2: \n")
    console.log(`${lista}`);
    console.log(`Soma da PG: ${soma}`);
}

const data = {
    id: 1,
    nome: "Levi",
    n: 20,
    a1: 1,
    r: 2
}

progressaoAritmetica(data);
progressaoGeometrica(data);


/**
 * Questão 3: Conceito de notas. 
 * 
 * @param {Number[]} notas 
 */
const atribuirConceito = notas => {
    let A = notas.filter(nota => nota >= 9.0 && nota <= 10.0);
    let B = notas.filter(nota => nota >= 7.0 && nota <= 8.9);
    let C = notas.filter(nota => nota >= 5.0 && nota <= 6.9);
    let D = notas.filter(nota => nota >= 0.0 && nota <= 4.9);

    console.log("\n\nQuestão 3:\n")
    console.log(`Conceito A: ${A}`);
    console.log(`Conceito B: ${B}`);
    console.log(`Conceito C: ${C}`);
    console.log(`Conceito D: ${D}`);
}

atribuirConceito([1,2,3,4,5,6,7,8,9,10]);


/**
 * Questão 4: Soma pares consecutivos.
 * 
 * @param {Number} x
 */
const somaParesConsecutivos = x => {
    if (x % 2 !== 0) {
        x += 1;
    }

    let lista_inicial = [...Array(5)]
    const result = lista_inicial.map((_, index, array) => array[index] = x + (index * 2))
    const soma = result.reduce((soma, valor) => soma + valor, 0);

    console.log("\n\nQuestão 4:\n")
    console.log(`Resultado da soma: ${soma}`);
}

somaParesConsecutivos(11);


/**
 * Questão 5: Imprime primos entre limite inferior e limite superior.
 * 
 * @param {Number} inicio 
 * @param {Number} fim 
 */
const imprimePrimos = (inicio = 0, fim = 100) => {
    const lista_inicial = [...Array(fim - inicio + 1)];
    const result = lista_inicial.map((_, index) => inicio + index)
    const primos = result.filter(ehPrimo);

    console.log("\n\nQuestão 5: \n")
    console.log(`Primos entre ${inicio} e ${fim}: ${primos}`);
}

const ehPrimo = numero => {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;

    const limiar = [...Array(Math.floor(Math.sqrt(numero)) - 1)];
    let lista_possiveis_primos = limiar.map((_, index) => index + 3);
    return !lista_possiveis_primos.some(divisor => numero % divisor === 0);
}

imprimePrimos(0, 100);
