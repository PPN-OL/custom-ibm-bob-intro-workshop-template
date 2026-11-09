/**
 * app.js
 * Demonstrates usage of calculator utilities and StatsTracker.
 */

const { add, multiply, StatsTracker } = require('./utils/calculator');

const tracker = new StatsTracker();

// Perform 3 additions
const sum1 = add(10, 5);
tracker.record('add');

const sum2 = add(3, 7);
tracker.record('add');

const sum3 = add(8, 2);
tracker.record('add');

// Perform 2 multiplications
const product1 = multiply(4, 6);
tracker.record('multiply');

const product2 = multiply(3, 9);
tracker.record('multiply');

// Log results
console.log('Addition results:', sum1, sum2, sum3);
console.log('Multiplication results:', product1, product2);
console.log('Operation summary:', tracker.getStats());
