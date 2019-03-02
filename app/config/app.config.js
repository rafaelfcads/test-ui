import authInterceptor from './auth.interceptor'

export default ($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) => {
  'ngInject';

  const config = {
    abstract: true,
    templateUrl: 'layout/app-view.html',
    resolve: {
      auth: (User) => User.verifyAuth()
    }
  }

  $httpProvider.interceptors.push(authInterceptor)
  $stateProvider.state('app', config)
  $urlRouterProvider.otherwise('/')
}
