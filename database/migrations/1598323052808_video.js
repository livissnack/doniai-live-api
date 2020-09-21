'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VideoSchema extends Schema {
  up () {
    this.create('videos', (table) => {
      table.increments()
      table.string('title', 254).notNullable().unique().comment('标题')
      table.text('remark').notNullable().comment('说明')
      table.string('cover_url', 254).nullable().comment('封面图')
      table.integer('duration').notNullable().defaultTo(0).comment('视频时长')
      table.integer('play_nums').notNullable().defaultTo(0).comment('播放数量')
      table.integer('status').notNullable().defaultTo(1).comment('0:上架;1:下架')
      table.integer('type').notNullable().defaultTo(0).comment('0:普通视频;1:直播流')
      table.integer('roomid').notNullable().defaultTo(0).comment('直播源房间号')
      table.string('platform', 20).notNullable().defaultTo('').comment('直播源抓取平台')
      table.integer('is_crawler').notNullable().defaultTo(0).comment('是否开启抓取任务0:不开启;1:开启')
      table.string('url').notNullable().comment('视频资源地址')
      table.integer('lesson_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('videos')
  }
}

module.exports = VideoSchema
