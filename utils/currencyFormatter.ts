// Reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

/**
 * Format a number to a currency string
 */
export default new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
