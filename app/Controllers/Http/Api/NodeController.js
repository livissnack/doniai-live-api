'use strict'
const Node = use('App/Models/Node')

class NodeController {
  async index () {
    return await Node.query().where({status: 0}).all()
  }
}

module.exports = NodeController
