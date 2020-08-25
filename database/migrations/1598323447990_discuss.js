'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiscussSchema extends Schema {
  up () {
    this.create('discusses', (table) => {
      table.increments()
      table.string('title', 254).notNullable().unique().comment('标题')
      table.text('content').notNullable().comment('内容')
      table.integer('comment_nums').notNullable().defaultTo(0).comment('评论数量')
      table.integer('click_nums').notNullable().defaultTo(0).comment('点击数量')
      table.integer('status').notNullable().defaultTo(0).comment('0:上架;1:下架')
      table.integer('is_hot').notNullable().defaultTo(1).comment('0:热门;1:非热门')
      table.integer('node_id')
      table.json('tags').nullable().comment('标签内容')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('discusses')
  }
}

module.exports = DiscussSchema
