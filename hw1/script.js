// 1. Спрашиваем первый операнд // 20
// 2. Спрашиваем второй операнд // 34
// 3. Вывести результат // 20 + 34 = 54

const operandA = +prompt('OperandA?');

const operandB = +prompt('OperandB?');
const result = operandA + operandB;
const expression = operandA + ' + ' + operandB + ' = ' + result;

alert(expression);