function authInterceptor(JWT, AppConstants, $window, $q) {
  'ngInject'

  return {
    request: function(config) {
      if(config.url.indexOf(AppConstants.api) === 0 && JWT.get()) {
        config.headers.Authorization = JWT.get();
      }
      return config;
    },

    responseError: function(rejection) {
      if (rejection.status === 403) {
        JWT.destroy();
        window.location.href = $window.location.origin
      }
      return $q.reject(rejection);
    }

  }
}

export default authInterceptor;
