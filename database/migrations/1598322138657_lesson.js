'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LessonSchema extends Schema {
  up () {
    this.create('lessons', (table) => {
      table.increments()
      table.string('title', 254).notNullable().unique().comment('标题')
      table.text('remark').notNullable().comment('说明')
      table.string('cover_url', 254).nullable().comment('封面图')
      table.integer('video_nums').nullable().comment('视频数量')
      table.integer('duration').notNullable().defaultTo(0).comment('视频总时长')
      table.integer('status').notNullable().defaultTo(1).comment('0:上架;1:下架')
      table.integer('type').notNullable().defaultTo(1).comment('1:热门;2:录播;3:直播')
      table.timestamps()
    })
  }

  down () {
    this.drop('lessons')
  }
}

module.exports = LessonSchema
