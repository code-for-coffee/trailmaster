'use strict'

const Model = require('trails-model')

/**
 * @module Students
 * @description Student object.
 */
module.exports = class Students extends Model {

  static config () {
    return {
      // Collection name
      tableName: 'students',

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
      },
      // Schema statics
      statics: {
        getByEmail: function (email) {
          return this
            .findOne({
              email: _.trim(email)
            })
            .exec()
        },
      },

      // Schema methods
      methods: {
        toJSON: function () {
          const user = this.toObject()
          delete user.password

          return user
        }
      }
    }
  }

  static schema () {
    return {
      username: String,
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
          validator: function (val) {
            return isEmail(val)
          },
          message: '{VALUE} is not a valid email'
        }
      },
      password: {
        type: String,
        required: true,
        validate: {
          validator: function (val) {
            if (val.length > 12)
            return val
          },
          message: '{VALUE} must be at least 12 characters long'
        }
      },
      firstName: {
        type: String,
        required: true,
        validate: {
          validator: function (val) {
            if (val.length > 2)
              return val
          },
          message: '{VALUE} must have at least 2 characters'
        }
      },
      lastName: {
        type: String,
        required: true,
        validate: {
          validator: function (val) {
            if (val.length > 2)
              return val
          },
          message: '{VALUE} must have at least 2 characters'
        }
      },
      location: {
        type: String
      }
    }
  }
}
