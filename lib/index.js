/**
 * Pon task to run coz
 * @module pon-task-coz
 * @version 2.0.2
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
