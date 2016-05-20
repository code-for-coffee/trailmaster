'use strict'

const Model = require('trails-model')

/**
 * @module Project
 * @description TODO document Model
 */
module.exports = class Project extends Model {

  static config () {
    return {
      // Collection name
      tableName: 'projects',

      // Schema options
      schema: {
        timestamps: true,

        versionKey: false,

        toObject: {
          virtuals: true
        },

        toJSON: {
          virtuals: true
        }
      }

    }
  }

  static schema () {
    return {
      name: String,
      location: String
    }
  }
}
