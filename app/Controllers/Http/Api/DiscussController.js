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
    return await Discuss.query().with('user').with('node').where(filters).paginate(page, limit)
  }

  async store ({ auth, request }) {
    const {title, node_id, content, tags} = request.only(['node_id', 'content', 'title', 'tags'])
    const user_id = auth.user.user_id
    const discuss = new Discuss()
    discuss.user_id = user_id
    discuss.node_id = node_id
    discuss.content = content
    discuss.title = title
    discuss.tags = tags
    return await discuss.save()
  }

  async show ({ params }) {
    const { id } = params
    const discuss = await Discuss.query().with('user').with('node').where('id', id).fetch()
    return discuss
  }
}

module.exports = DiscussController
