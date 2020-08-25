'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique().comment('用户名')
      table.string('mobile', 11).notNullable().unique().comment('手机号')
      table.string('email', 254).notNullable().unique().comment('邮箱')
      table.string('password', 60).notNullable().comment('密码')
      table.integer('experience').notNullable().defaultTo(0).comment('经验值')
      table.string('sina_url', 100).nullable().comment('新浪微博地址')
      table.string('githup_url', 100).nullable().comment('githup地址')
      table.string('website_url', 100).nullable().comment('个人网站地址')
      table.string('motto', 254).nullable().comment('个人格言')
      table.string('referral_code', 12).nullable().comment('推荐码')
      table.string('avatar', 254).nullable().comment('用户图像')
      table.integer('status').notNullable().defaultTo(0).comment('0:激活;1:锁定')
      table.integer('level_id').notNullable().defaultTo(1).comment('级别ID')
      table.string('level_name', 20).notNullable().defaultTo('青铜').comment('级别名称')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
