// Спрашиваем мат. операцию + - * / // -
// Валидируем
// Спрашиваем сколько чисел нужно считать // 3 >=2
// Валидируем
// Спрашиваем число 1 // 2
// Валидируем
// Спрашиваем число 2 // 3
// Валидируем
// ....
// Спрашиваем число N // 5
// Валидируем

//Выводим результат
// 2 - 3 -5 = -6

const action = getAction();
const operandsCount = getOperandsCount();
const expression = calculateExpression(operandsCount, action);
alert(expression);

function getAction() {
    let val;

    do {
        val = prompt('Action? + - * /');
    } while (isOperatorInvalid(val));

    return val;
}

function isOperatorInvalid(val) {
    return val !== '+' && val !== '-' && val !== '*' && val !== '/';
}

function getOperandsCount() {
    return getNumber('How many operands?');
}

function isOperandCountInvalid(val) {
    return isNumberInvalid(val) || val < 2;
}

function getOperand(label) {
    return getNumber(label);
}

function getNumber(title) {
    let operand;

    do {
        operand = prompt(title);
    } while (isOperandInvalid(operand));

    return Number(operand);
}

function isOperandInvalid(val) {
    return isNumberInvalid(val);
}

function isNumberInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val);
}

function calculateExpression(count, operator) {
    let result = getOperand('Operand 1');
    let expression = result;

    for (let i = 2; i <= count; i++) {
        const operand = getOperand('Operand ' + i);

        result = calculateResult(result, operand, operator);
        expression += ` ${operator} ${operand}`;
    }

    return `${expression} = ${result}`;
}

function calculateResult(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}