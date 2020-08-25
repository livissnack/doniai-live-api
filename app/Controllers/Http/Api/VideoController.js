'use strict'
const Video = use('App/Models/Video')

class VideoController {
  async index ({ request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const lesson_id = request.input('lesson_id', '')
    let filters = {status: 0}
    if(lesson_id !== '') {
      filters.lesson_id = lesson_id
    }
    return await Video.query().where(filters).paginate(page, limit)
  }

  async show ({ params }) {
    const { id } = params.id
    const video = await Video.find(id)
    return video
  }
}

module.exports = VideoController
