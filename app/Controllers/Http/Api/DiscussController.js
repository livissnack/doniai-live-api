'use strict'
const Discuss = use('App/Models/Discuss')

class DiscussController {
  async index ({ request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const node_id = request.input('node_id', 1)
    let filters = {status: 0}
    if(node_id !== '') {
      filters.node_id = node_id
    }
    return await Discuss.query().where(filters).paginate(page, limit)
  }

  async show ({ params }) {
    const { id } = params
    const discuss = await Discuss.find(id)
    return discuss
  }
}

module.exports = DiscussController
