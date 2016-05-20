'use strict'
/* global describe, it */

const assert = require('assert')

describe('Students', () => {
  it('should exist', () => {
    assert(global.app.api.policies['Students'])
  })
})
