function toListOfNumbers() {
    const value = document.getElementById("numbers").value;
    const listStringOfNumbers = value.split(",");
    const listOfNumbers = listStringOfNumbers.map(str => Number(str));
    return listOfNumbers;
}

function orderNumbers() {
    const listOfNumbers = toListOfNumbers(value);

    const listSorted = listOfNumbers.sort();
    document.getElementById("result").innerHTML = listSorted;
}

function sumOfNumbers() {
    const listOfNumbers = toListOfNumbers(value);
    
    let sum = 0;
    for (let number in listOfNumbers) {
        if (number % 2 == 1 && number % 3 == 0 && Number.isInteger(number)) {
            sum += number;
        }
    }

    return sum;
}

function factorial(value) {
    let result = 1;

    let n = value;
    while (n > 0) {
        result *= n;
        n -= 1;
    }

    return result;
}

function makeFactorial() {
    const listOfNumbers = toListOfNumbers(value);
    const integerNumbers = listOfNumbers.filter(number => Number.isInteger(number) && number >= 0);

    let result = 0;
    for (number in integerNumbers) {
        result += integerNumbers;
    }

    return result;
}
