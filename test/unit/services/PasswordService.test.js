'use strict'
/* global describe, it */

const assert = require('assert')

describe('PasswordService', () => {
  it('should exist', () => {
    assert(global.app.api.services['PasswordService'])
  })
})
