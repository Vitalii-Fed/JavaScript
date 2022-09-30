const calcBtnElem = document.querySelector('#calcBtn');
const operandAElem = document.querySelector('#operandA');
const operandBElem = document.querySelector('#operandB');
const operatorElem = document.querySelector('#operator');
const resultElem = document.querySelector('#result');

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

calcBtnElem.addEventListener('click', onCalcBtnClick);

function onCalcBtnClick() {
    const values = getValues();
    if (!values) {
        return showMsg('Invalid operands');
    }

    const { a, b, action } = values;
    const expression = generateExpression(a, b, action);

    showMsg(expression);
}

function getValues() {
    const operandA = operandAElem.value;
    const operandB = operandBElem.value;
    const operator = operatorElem.value;

    if (isOperandInvalid(operandA) || isOperandInvalid(operandB)) {
        return null;
    }

    return {
        a: +operandA,
        b: +operandB,
        action: operator,
    };
}

function isOperandInvalid(operand) {
    return operand === '' || isNaN(operand);
}

function generateExpression(a, b, action) {
    return `${a} ${action} ${b} = ${calculateResult(a, b, action)}`;
}

function showMsg(msg) {
    resultElem.textContent = msg;
}

function calculateResult(a, b, operator) {
    const fn = getAction(operator);

    return fn(a, b);
}

function getAction(operator) {
    return actions[operator] ? actions[operator] : actions.default;
}