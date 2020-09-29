'use strict'

const Task = use('Task')
const Http = use('got')
const Video = use('App/Models/Video')
const BaseUrl = 'https://hi.doniai.com/api/v1.0'
const TinyTigerUrl = 'http://114.55.166.223/getliveurl'

class CrawlerLive extends Task {
  static get schedule () {
    return '1 */3 * * * *'
  }

  async handle () {
    this.info('Task CrawlerLive handle')
    let tasks = await this.getCrawlerTasks()
    tasks.forEach(async task => {
      await this.doTask(task)
    });
  }

  async getCrawlerTasks() {
    const tasks = await Video.query().where({type: 1, is_crawler: 1}).fetch()
    return tasks.toJSON()
  }

  async doTask(task) {
    const live_url = await this.getLiveUrl(task)
    let video_id = task.id
    if(return_data.code === 200) {
      await Video.query().where('id', video_id).update({ url: live_url })
    }
  }

  async getLiveUrl(task) {
    if(task.platform === 'douyu') {
      const { body } = await Http.get(`${TinyTigerUrl}`, {searchParams: {url: `https://www.douyu.com/${task.roomid}`}});
      let return_data = JSON.parse(body)
      if(return_data.status === 'true') {
        let live_url = return_data['hls'][0]['data'][0]['url'][0]
        return live_url.replace(/^http:\/\//i, 'https://')
      } else {
        return ''
      }
    }

    if(task.platform === 'huya') {
      const { body } = await Http.get(`${BaseUrl}/live/${task.platform}`, {searchParams: {roomid: task.roomid}});
      let return_data = JSON.parse(body)
      let live_url = return_data.data.live_url
      return live_url
    }
  }
}

module.exports = CrawlerLive
