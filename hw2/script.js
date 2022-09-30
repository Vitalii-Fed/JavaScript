// 1. Спрашиваем первый операнд // 20
// 1.1 Спрашиваем пока он не введет число
// 2. Спрашиваем второй операнд // 34
// 2.1 Спрашиваем пока он не введет число
// 3 Спрашиваем действие +, -, /, *
// 3.1 спрашиваем пока не введет правильно
// 4 Считаем результат
// 5. Вывести результат // 20 + 34 = 54

const operandA = getOperand('Enter operandA');
const operandB = getOperand('Enter operandB');
const action = getOperator();
const result = calculateResult(operandA, operandB, action);
showResult(operandA, operandB, action, result);

// ====================================
function getOperand(label) {
    let operand;

    do {
        operand = prompt(label);
    } while (isOperandInvalid(operand));

    return Number(operand);
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val);
}

function getOperator() {
    let val;

    do {
        val = prompt('Action? + - * /');
    } while (isOperatorInvalid(val));
    // } while (
    //     !(action === '+' || action === '-' || action === '*' || action === '/')
    // );

    return val;
}

function isOperatorInvalid(val) {
    return val !== '+' && val !== '-' && val !== '*' && val !== '/';
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

function showResult(a, b, action, result) {
    // const expression = 'Expression: ' + a + ' ' + action + ' ' + b + ' = ' + result;
    const expression = `Expression: ${a} ${action} ${b} = ${result}`;
    alert(expression);
}