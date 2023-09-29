
/**
 * @jest-environment jsdom
 * @jsdom-environment-options {"url": "../index.html"}
 */

test('Adds two numbers using equals: ', () => {
    let calculator = calculatorulator;
    calculator.readInput(testValue = '5');
    calculator.readInput(testValue = 'add');
    calculator.readInput(testValue = '5');
    calculator.readInput(testValue = 'enter');
    expect(calculator.result).toBe('10');
});