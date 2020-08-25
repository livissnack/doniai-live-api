'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.string('title', 254).notNullable().comment('标题')
      table.string('post_url', 254).notNullable().comment('封面图')
      table.string('tag', 40).notNullable().comment('标签')
      table.text('content').notNullable().comment('内容')
      table.integer('comment_nums').notNullable().defaultTo(0).comment('评论数')
      table.integer('favorite_nums').notNullable().defaultTo(0).comment('收藏数')
      table.integer('see_nums').notNullable().defaultTo(0).comment('观看数')
      table.integer('font_nums').notNullable().defaultTo(0).comment('字数')
      table.integer('status').notNullable().defaultTo(0).comment('0:上架;1:下架')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
