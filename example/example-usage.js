'use strict'

const pon = require('pon')
const coz = require('pon-task-coz')

async function tryExample () {
  let run = pon({
    coz: coz('**/.*.bud')
  })

  run('coz')
}

tryExample()
