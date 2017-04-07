/**
 * Define task
 * @function define
 * @param {string|string[]} patterns - Pattern to render
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const coz = require('coz')
const co = require('co')

/** @lends define */
function define (patterns, options = {}) {
  function task (ctx) {
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


