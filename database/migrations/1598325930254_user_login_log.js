'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserLoginLogSchema extends Schema {
  up () {
    this.create('user_login_logs', (table) => {
      table.increments()
      table.integer('user_id')
      table.string('ip').notNullable()
      table.string('user_agent', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_login_logs')
  }
}

module.exports = UserLoginLogSchema
