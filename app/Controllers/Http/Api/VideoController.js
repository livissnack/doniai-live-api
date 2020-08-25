'use strict'
const Video = use('App/Models/Video')

class VideoController {
  async index ({ request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    return await Video.query().where({status: 0}).paginate(page, limit)
  }

  async show ({ params }) {
    const { id } = params.id
    const video = await Video.find(id)
    return video
  }
}

module.exports = VideoController
