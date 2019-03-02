export default ($stateProvider) => {
  'ngInject'

  const config = {
    url: '/home',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home'
  }

  $stateProvider.state('app.home', config)
}
