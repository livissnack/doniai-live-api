'use strict'
const ArticleComment = use('App/Models/ArticleComment')

class ArticleCommentController {
  async index ({ request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const article_id = request.input('article_id')
    return await ArticleComment.query().where({status: 0, article_id: article_id}).paginate(page, limit)
  }
}

module.exports = ArticleCommentController
