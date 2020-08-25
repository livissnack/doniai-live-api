'use strict'
const Lesson = use('App/Models/Lesson')

class LessonController {
  async index ({ request }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const type = request.input('type', 1)
    let lessons = await Lesson.query().where({status: 0, type: type}).paginate(page, limit)
    return lessons
  }

  async show ({ params }) {
    const { id } = params
    const lesson = await Lesson.find(id)
    return lesson
  }
}

module.exports = LessonController
