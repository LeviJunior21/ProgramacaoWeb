/**
 * Converte uma string com elementos separados por vírgula em um array de números. 
 */
function toListOfNumbers(value) {
    const listStringOfNumbers = value.split(",");
    const listOfNumbers = listStringOfNumbers.map(str => Number(str.trim()));
    return listOfNumbers.filter(num => !isNaN(num));
}

/**
 * Questão 1:
 * Funcão que calcula quadrados de cala elemento do array.
 */
function calcularQuadrados(value){
    numeros = toListOfNumbers(value);
    let quadrados = []

    for (i = 0; i < numeros.length; i++){
        quadrados.push(numeros[i] ** 2);
    }

    return quadrados.join(", ");
}

/**
 * Questão 2:
 * Função que calcula o maior número de um array.
 */
function verificarMaior(value){
    numeros = toListOfNumbers(value);

    if (numeros.length == 0) {
        return null;
    }

    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++){
        if(numeros[i] > maior){
            maior = numeros[i];
        }
    }

    return `O maior valor é ${maior}`;
}

/**
 * Questão 3: 
 * Função que calcula quantidades de maiores e menores de 18 anos.
 */
function verificarIdadesMaiorMenor18(value){
    let idades = toListOfNumbers(value);
    var maior18 = 0;
    var menor18 = 0;
    for (i = 0; i < idades.length; i++){
        if(idades[i] >= 18)
            maior18++;
        else
            menor18++;
    }

    return "Quantidade de maiores: " + maior18 + "; e menores: " + menor18;
}

/**
 * Questão 4:
 * Função que separa o dia mês e o ano.
 */
function separarDiaMesAno(data){
    data = data.split("/");
    return `${"<br>O dia é: " + data[0] + "<br>O mês é: " + data[1] + "<br>O ano é: " + data[2] + "<br>"}`;
}

/**
 * Questão 5:
 * Função que inverte um texto.
 */
function inverterTexto(value){
    var textoAux = '';
    for (var i = value.length - 1; i >= 0; i--){
        textoAux += value[i];
    }
    return textoAux;
}

/**
 * Questão 6:
 * Função que ordena números de uma lista.
 */
function orderNumbers(value) {
    let listOfNumbers = toListOfNumbers(value);
    return listOfNumbers.sort((a, b) => a - b);
}

/**
 * Questão 7: 
 * Função que soma os números de uma lista, onde cada elemento somado seja inteiro, impar e divisível por 3.
 */
function sumOfNumbers(value) {
    const listOfNumbers = toListOfNumbers(value);
    let sum_values = 0;

    for (const number of listOfNumbers) {
        if (number % 2 == 1 && number % 3 == 0 && Number.isInteger(number)) {
            sum_values += number;
        }
    }

    return sum_values;
}

/**
 * Função que calcula o fatorial de um número.
 */
function factorial(value) {
    let result = 1;

    let n = value;
    while (n > 0) {
        result *= n;
        n -= 1;
    }

    return result;
}

/**
 * Questão 8:
 * Função que calcula a soma de cada fatorial de cada elemento da lista.
 */
function makeFactorial(value) {
    const listOfNumbers = toListOfNumbers(value);
    const integerNumbers = listOfNumbers.filter(number => Number.isInteger(number) && number >= 0);

    let result = 0;
    for (const number of integerNumbers) {
        result += factorial(number);
    }

    return result;
}

/**
 * Questão 9: 
 * Função que calcula estatísticas de média de todos os números, quantidade e percentual de 
 * números positvos e negativos uma lista de números. 
 */
function statistics(value) {
    const integerNumbers = toListOfNumbers(value);
    let avarage = 0;
    let positiveValues = 0;
    let negativeValues = 0;

    for (let i of integerNumbers) {
        avarage += i;
        if (i > 0) {
            positiveValues ++;
        } else if (i < 0) {
            negativeValues ++;
        }
    }

    avarage = avarage / integerNumbers.length;
    const percentualPositives = (positiveValues / integerNumbers.length) * 100;
    const percentualNegatives = (negativeValues / integerNumbers.length) * 100;

    return `<div>
                <br><h5>Média dos números: ${avarage}</h5>
                <br><h5>Quantidade de valores positivos: ${positiveValues}</h5>
                <br><h5>Percentual de valores negativos: ${percentualPositives.toFixed(2)}%</h5>
                <br><h5>Quantidade de valores negativos: ${negativeValues}</h5>
                <br><h5>Percentual de valores negativos: ${percentualNegatives.toFixed(2)}%</h5>
            </div>`
}

/**
 * Questão 10: 
 * Inverte a ordem dos números de uma lista.
 */
function invert(value) {
    const integerNumbers = toListOfNumbers(value);
    return integerNumbers.reverse();
}

function confirmar() {
    const selectedValue = document.querySelector('input[name="question"]:checked');
    const input = document.getElementById("input-value").value;
    const value = selectedValue? selectedValue.value : null;

    if (input) {
        let result;

        if (value == "question1") {
            result = calcularQuadrados(input);
        } else if (value == "question2") {
            result = verificarMaior(input);
        } else if (value == "question3") {
            result = verificarIdadesMaiorMenor18(input);
        } else if (value == "question4") {
            result = separarDiaMesAno(input);
        } else if (value == "question5") {
            result = inverterTexto(input);
        } else if (value == "question6") {
            result = orderNumbers(input);
        } else if (value == "question7") {
            result = sumOfNumbers(input);
        } else if (value == "question8") {
            result = makeFactorial(input);
        } else if (value == "question9") {
            result = statistics(input);
        } else if (value == "question10") {
            result = invert(input);
        } else {
            alert("Por favor, selecione uma questão!")
        }

        if (value) {
            document.getElementById("result").innerHTML = `Resultado: ${result}`;
        } else {
            alert("Digite uma entrada válida.")
        }
    } else {
        alert("Por favor, digite uma entrada");
    }
}
