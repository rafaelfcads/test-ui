export default ($stateProvider, $httpProvider) => {
  'ngInject'

  $stateProvider
    .state('app.login', {
      url: '/',
      controller: 'AuthCtrl as $ctrl',
      templateUrl: 'auth/auth.html',
      title: 'Sign in',
      resolve: {
        auth: (User) => User.ensureAuthIs(false)
      }
    })
}