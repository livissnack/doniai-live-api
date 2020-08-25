'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NodeSchema extends Schema {
  up () {
    this.create('nodes', (table) => {
      table.increments()
      table.string('name', 20).notNullable().unique().comment('名称')
      table.integer('status').notNullable().defaultTo(0).comment('0:上架;1:下架')
      table.timestamps()
    })
  }

  down () {
    this.drop('nodes')
  }
}

module.exports = NodeSchema
