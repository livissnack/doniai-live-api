'use strict'
const Discuss = use('App/Models/Discuss')

class DiscussController {
  async index ({ request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    return await Discuss.query().where({status: 0}).paginate(page, limit)
  }

  async show ({ params }) {
    const { id } = params
    const discuss = await Discuss.find(id)
    return discuss
  }
}

module.exports = DiscussController
