'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DiscussComment extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  discuss () {
    return this.belongsTo('App/Models/Discuss')
  }
}

module.exports = DiscussComment
