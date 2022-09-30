function createCalculator(base) {
    const calculator = () => base;

    calculator.add = (b) => (base += b);
    calculator.div = (b) => (base /= b);
    calculator.sub = (b) => (base -= b);
    calculator.mult = (b) => (base *= b);
    calculator.set = (b) => (base = b);

    return calculator;
}

const calc = createCalculator(100);