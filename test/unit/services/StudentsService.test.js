'use strict'
/* global describe, it */

const assert = require('assert')

describe('StudentsService', () => {
  it('should exist', () => {
    assert(global.app.api.services['StudentsService'])
  })
})
