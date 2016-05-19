'use strict'
/* global describe, it */

const assert = require('assert')

describe('StudentsController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['StudentsController'])
  })
})
