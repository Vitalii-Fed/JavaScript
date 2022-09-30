// Спрашиваем мат. операцию + - * / // +
// Валидируем
// Спрашиваем все операнды через запятую // 3,4,5,6,7
//спросить строку
// валидировать
// разбить на операнды
// операнды должны быть числами
// Выводим результат // 25

const actions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
    default: () => {
        console.error('Action not valid');
        return null;
    },
};

const operator = getOperator();
const operands = getOperands();
const result = calculate(operands, operator);

showResult(result);

function getOperator() {
    let val;

    do {
        val = prompt('Action? + - * /');
    } while (isOperatorInvalid(val));

    return val;
}

function isOperatorInvalid(val) {
    return val !== '+' && val !== '-' && val !== '*' && val !== '/';
}

function getOperands() {
    let valuesChunks;
    do {
        const valuesStr = getOperandsString();
        valuesChunks = valuesStr.split(',');
    } while (isOperandsNaN(valuesChunks));

    const values = valuesChunks.map(Number);

    return values;
}

function getOperandsString() {
    let str = '';

    while (isOperandsStringInvalid(str)) {
        str = prompt('Operands');
    }

    return str;
}

function isOperandsStringInvalid(val) {
    return val === null || val === '';
}

function isOperandsNaN(values) {
    // for (let i = 0; i < values.length; i++) {
    //     if (isNaN(values[i]) || values[i] === '') {
    //         return true;
    //     }
    // }

    // return false;

    return values.find((item) => isNaN(item) || item === '') !== null;
}

function calculate(values, operator) {
    // let result = values[0];

    // for (let i = 1; i < values.length; i++) {
    //     result = calculateResult(result, values[i], operator);
    // }

    // const result = values.reduce(function (acc, item) {
    //     return calculateResult(acc, item, operator);
    // });

    const result = values.reduce((acc, item) =>
        calculateResult(acc, item, operator)
    );

    return result;
}

function calculateResult(a, b, operator) {
    const fn = getAction(operator);

    return fn(a, b);
}

function showResult(value) {
    console.log('Result is: ' + value);
}

function getAction(operator) {
    // if (actions[operator]) {
    //     return actions[operator];
    // } else {
    //     if (asdc){

    //     } else
    //     return actions.default;
    // }

    return actions[operator] ? actions[operator] : actions.default;
    // return actions[operator] || actions.default;
}