'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserLevelSchema extends Schema {
  up () {
    this.create('user_levels', (table) => {
      table.increments()
      table.string('level_name', 40).notNullable().defaultTo('').comment('级别')
      table.integer('status').notNullable().defaultTo(0).comment('0:上架;1:下架')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_levels')
  }
}

module.exports = UserLevelSchema
