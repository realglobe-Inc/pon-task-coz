/**
 * Define task
 * @function define
 * @param {string|string[]} patterns - Pattern to render
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

/** @lends define */
function define(patterns, options = {}) {
  async function task(ctx) {
    // Require here to reduce initial loading time
    const coz = require('coz')
    return coz.render(patterns, options)
  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define


