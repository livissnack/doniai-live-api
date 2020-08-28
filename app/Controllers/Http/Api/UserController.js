'use strict'
const User = use('App/Models/User')

class UserController {
  async login ({ auth, request }) {
    const { email, password } = request.all()
    return await auth.attempt(email, password)
  }

  async register ({ request }) {
    const { username, email, password } = request.all()
    const user = new User()
    user.username = username
    user.email = email
    user.password = password
    return await user.save()
  }

  async logout ({ auth }) {
    const refreshToken = ''
    return await auth.authenticator('jwt').revokeTokens([refreshToken])
  }

  show ({ auth }) {
    return auth.user
  }

  async update ({ auth, params, request }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    const { username, email, sina_url, githup_url, website_url, motto, referral_code, avatar, mobile } = request.all()
    await User.query().where('user_id', auth.user.user_id).update({ 
      username: username,
      email: email,
      mobile: mobile,
      sina_url: sina_url,
      githup_url: githup_url,
      website_url: website_url,
      motto: motto,
      referral_code: referral_code,
      avatar: avatar
    })
  }
}

module.exports = UserController
