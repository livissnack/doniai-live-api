'use strict'
const VideoComment = use('App/Models/VideoComment')

class VideoCommentController {
  async index ({ request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const video_id = request.input('video_id')
    return await VideoComment.query().where({status: 0, video_id: video_id}).paginate(page, limit)
  }
}

module.exports = VideoCommentController
