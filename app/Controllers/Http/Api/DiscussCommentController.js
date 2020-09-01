'use strict'
const DiscussComment = use('App/Models/DiscussComment')

class DiscussCommentController {
  async index ({ request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const discuss_id = request.input('discuss_id')
    return await DiscussComment.query().with('user').with('discuss').where({status: 0, discuss_id: discuss_id}).paginate(page, limit)
  }

  async store ({ auth, request }) {
    const {discuss_id, content} = request.only(['discuss_id', 'content'])
    const user_agent = request.header('User-Agent')
    const user_id = auth.user.user_id
    const discuss_comment = new DiscussComment()
    discuss_comment.user_id = user_id
    discuss_comment.discuss_id = discuss_id
    discuss_comment.content = content
    discuss_comment.device_name = user_agent
    return await discuss_comment.save()
  }
}

module.exports = DiscussCommentController
