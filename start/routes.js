'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'TestController.index')

/* frontend all api routers */
Route.group(() => {
  Route.post('users/login', 'UserController.login')
  Route.post('users/logout', 'UserController.logout')
  Route.post('users/register', 'UserController.register')

  Route.get('lessons', 'LessonController.index').as('lessons.index')
  Route.get('articles', 'ArticleController.index').as('articles.index')
  Route.get('discusses', 'DiscussController.index').as('discusses.index')
  Route.get('videos', 'VideoController.index').as('videos.index')

  Route.get('nodes', 'NodeController.index').as('nodes.index')
}).prefix('api/v1').namespace('Api')

Route.group(() => {
  Route.get('users/:id', 'UserController.show').as('users.show')
  Route.put('users/:id', 'UserController.update').as('users.update')

  Route.get('lessons/:id', 'LessonController.show').as('lessons.show')
  Route.get('articles/:id', 'ArticleController.show').as('articles.show')
  Route.get('discusses/:id', 'DiscussController.show').as('discusses.show')
  Route.get('videos/:id', 'VideoController.show').as('videos.show')

  Route.get('article_comments', 'ArticleCommentController.index').as('article_comments.index')
  Route.get('discuss_comments', 'DiscussCommentController.index').as('discuss_comments.index')
  Route.get('video_comments', 'VideoCommentController.index').as('video_comments.index')
}).prefix('api/v1').middleware(['auth']).namespace('Api')