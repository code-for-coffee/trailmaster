'use strict'
/* global describe, it */

const assert = require('assert')

describe('BasicAuth', () => {
  it('should exist', () => {
    assert(global.app.api.policies['BasicAuth'])
  })
})
