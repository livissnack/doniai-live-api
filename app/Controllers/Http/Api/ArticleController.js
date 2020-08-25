'use strict'
const Article = use('App/Models/Article')

class ArticleController {
  async index ({ request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    return await Article.query().where({status: 0}).paginate(page, limit)
  }

  async show ({ params }) {
    const { id } = params.id
    const article = await Article.find(id)
    return article
  }
}

module.exports = ArticleController
