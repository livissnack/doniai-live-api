'use strict'
const DiscussComment = use('App/Models/DiscussComment')

class DiscussCommentController {
  async index ({ request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const discuss_id = request.input('discuss_id')
    return await DiscussComment.query().where({status: 0, discuss_id: discuss_id}).paginate(page, limit)
  }
}

module.exports = DiscussCommentController
