'use strict'

const Mail = use('Mail')
const Http = use('got')
const Video = use('App/Models/Video')
const BaseUrl = 'https://hi.doniai.com/api/v1.0'

class TestController {
  async index () {
    let tasks = await this.test()
    tasks.forEach(async task => {
      await this.doTask(task)
    });
  }

  async test() {
    const tasks = await Video.query().where({type: 1, is_crawler: 1}).fetch()
    return tasks.toJSON()
  }

  async doTask(task) {
    const { body } = await Http.get(`${BaseUrl}/live/${task.platform}`, {searchParams: {roomid: task.roomid}});
    let return_data = JSON.parse(body)
    let live_url = return_data.data.live_url
    let video_id = task.id

    if(return_data.code === 200) {
      console.log(task.id)
      console.log('ada');
      await Video
      .query()
      .where('id', task.id)
      .update({ url: live_url })
    }
    return body
  }

  async mail() {
    let user = {
      username: 'guanxin',
      email: 'brucesnack@outlook.com'
    }
    await Mail.send('welcome', user, (message) => {
      message
        .to(user.email)
        .from('brucesnack@outlook.com')
        .subject('Welcome to yardstick')
    })
    return 'send email success'
  }
}

module.exports = TestController
