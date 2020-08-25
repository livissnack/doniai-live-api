'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiscussCommentSchema extends Schema {
  up () {
    this.create('discuss_comments', (table) => {
      table.increments()
      table.string('content', 254).notNullable().comment('内容')
      table.integer('status').notNullable().defaultTo(0).comment('0:上架;1:下架')
      table.integer('discuss_id')
      table.string('device_name', 100).comment('设备名')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('discuss_comments')
  }
}

module.exports = DiscussCommentSchema
