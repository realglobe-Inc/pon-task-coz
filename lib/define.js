/**
 * Define task
 * @function define
 * @param {string|string[]} patterns - Pattern to render
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const co = require('co')

/** @lends define */
function define (patterns, options = {}) {
  function task (ctx) {
    // Require here to reduce initial loading time
    const coz = require('coz')
    return co(function * () {
      yield coz.render(patterns, options)
    })
  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define


