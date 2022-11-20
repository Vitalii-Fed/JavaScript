function mult(...args) {
    const result = args.reduce((acc, item) => (acc * item));
    return result;
}
module.exports = mult;