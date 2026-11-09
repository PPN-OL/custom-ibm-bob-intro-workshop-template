/**
 * validator.js
 * Validates that an object contains the required string fields `id` and `name`.
 */

/**
 * Required fields that every schema object must contain.
 * @type {string[]}
 */
const REQUIRED_FIELDS = ['id', 'name'];

/**
 * Checks whether an object contains the required string fields (`id`, `name`).
 *
 * @param {Object} obj - The object to validate.
 * @returns {{ valid: boolean, errors: string[] }} Validation result and list of errors.
 */
function validateSchema(obj) {
  const errors = [];

  if (obj === null || typeof obj !== 'object') {
    return { valid: false, errors: ['Input must be a non-null object'] };
  }

  for (const field of REQUIRED_FIELDS) {
    if (!(field in obj)) {
      errors.push(`Missing required field: "${field}"`);
    } else if (typeof obj[field] !== 'string') {
      errors.push(`Field "${field}" must be a string, got ${typeof obj[field]}`);
    } else if (obj[field].trim() === '') {
      errors.push(`Field "${field}" must not be empty`);
    }
  }

  return { valid: errors.length === 0, errors };
}

module.exports = { validateSchema, REQUIRED_FIELDS };
