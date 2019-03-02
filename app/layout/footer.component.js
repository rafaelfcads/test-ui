class AppFooterCtrl {
  constructor(AppConstants) {
    'ngInject'
    this.appName = AppConstants.appName
    this.date = new Date()
  }
}

export default {
  controller: AppFooterCtrl,
  templateUrl: 'layout/footer.html'
}
