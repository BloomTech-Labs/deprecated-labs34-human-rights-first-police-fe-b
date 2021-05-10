/**
 * GENERAL HELPER UTILITY FUNCTIONS
 * --------------------------------
 *
 * Custom lodash-like functions to modify text
 * throughout this project.
 */

export const shortenWord = (str, size) => {
  if (str.length <= size) return str;

  return `${str.slice(0, size)}...`;
};

export const capitalizeStr = str => {
  if (typeof str !== 'string') return '';

  return str.charAt(0).toUpperCase() + str.slice(1);
};
