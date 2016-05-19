'use strict'
/* global describe, it */

const assert = require('assert')

describe('Students Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Students'])
  })
})
