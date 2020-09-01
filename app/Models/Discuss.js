'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Discuss extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  node () {
    return this.belongsTo('App/Models/Node')
  }

  comments () {
    return this.hasMany('App/Models/DiscussComment')
  }
}

module.exports = Discuss
