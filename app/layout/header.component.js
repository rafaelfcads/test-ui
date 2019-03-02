class AppHeaderCtrl {
  constructor(AppConstants, $scope) {
    'ngInject' 
    this.appName = AppConstants.appName
  }
}

export default {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
}
