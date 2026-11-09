/**
 * calculator.js
 * Utility functions and StatsTracker class for the Lab 1 calculator demo.
 */

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Tracks operation counts and provides summary statistics.
 */
class StatsTracker {
  constructor() {
    /** @type {Object.<string, number>} */
    this.counts = {};
  }

  /**
   * Records an operation by name.
   * @param {string} operation - Name of the operation (e.g. 'add', 'multiply').
   */
  record(operation) {
    if (!this.counts[operation]) {
      this.counts[operation] = 0;
    }
    this.counts[operation]++;
  }

  /**
   * Returns the count for a specific operation.
   * @param {string} operation
   * @returns {number}
   */
  getCount(operation) {
    return this.counts[operation] || 0;
  }

  /**
   * Returns a summary object of all recorded operations.
   * @returns {Object.<string, number>}
   */
  getStats() {
    return { ...this.counts };
  }
}

module.exports = { add, multiply, StatsTracker };
