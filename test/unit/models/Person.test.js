'use strict'
/* global describe, it */

const assert = require('assert')

describe('Person Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Person'])
  })
})
