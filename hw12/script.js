function CustomCalc(base) {
    this.result = base;
    this.add = function (val2) {return (this.result += val2)};
    this.sub = function (val2) {return (this.result -= val2)};
    this.mult = function (val2) {return (this.result *= val2)};
    this.div = function (val2) {return (this.result /= val2)};
}

const calc1 = new CustomCalc(777);