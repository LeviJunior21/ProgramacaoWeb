/**
 * 
 * @param {number[]} lista 
 */
function somaArray(lista) {
    const maiores60Menores300 = lista.filter(numero => numero >= 60 && numero <= 300);
    let soma = 0;
    maiores60Menores300.forEach(element => {
        soma += element;
    });

    console.log(`A lista dos valores maiores que 60 é: ${maiores60Menores300}.`);
    console.log(`A soma dos elementos da lista é: ${soma}.`);

}

somaArray([1, 60, 232, 7, 25, 76, 29,74, 92]);


const data = {
    id: 1,
    nome: "Levi",
    n: 20,
    a1: 1,
    r: 2
}

/**
 * 
 * @param {Number} valorAtual 
 * @param {Number} index 
 * @param {Number[]} array 
 */
const call = (valorAtual, index, array) => {
    array.push()
}

/**
 * 
 * @param {{n: Number, a1: Number, r: Number}} data
 */
const progressaoAritmetica = ({n, a1, r}) => {
    let lista = [...Array(n)];
    lista.forEach((_, index) => {lista[index] = a1 + (n - (index + 1)) * r});
    lista.reverse();
    
    let soma = 0;
    lista.forEach(element => soma += element);

    console.log(lista);
    console.log(soma);
}

/**
 * 
 * @param {{n: Number, a1: Number, r: Number}} data
 */
const progressaoGeometrica = ({n, a1, r}) => {
    let lista = [...Array(n)];
    lista.forEach((_, index) => {lista[index] = a1 * r ** (n - index - 1)});
    lista.reverse();

    let soma = 0;
    lista.forEach(element => soma += element);

    console.log(lista);
    console.log(soma);
}

progressaoAritmetica(data);
progressaoGeometrica(data);
