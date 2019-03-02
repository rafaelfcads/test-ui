angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title ng-bind=\"pageTitle\"></title>\n    <link href=\"//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css\" rel=\"stylesheet\" type=\"text/css\">\n    <link href=\"//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic\" rel=\"stylesheet\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"style.css\" >\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n  </head>\n  <body>\n    <div ui-view></div>\n    <script src=\"main.js\"></script>\n  </body>\n</html>\n");
$templateCache.put("auth/auth.html","<div class=\"container p-auth text-center\">\n\n    <form ng-submit=\"$ctrl.submitForm()\">\n      <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n        <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n    \n        <fieldset class=\"form-group\">\n          <div class=\"text-center\">\n          <input class=\"form-control form-control-lg\"\n            type=\"email\"\n            placeholder=\"Email\"\n            ng-model=\"$ctrl.formData.email\" />\n        </fieldset>\n    \n        <fieldset class=\"form-group\">\n          <input class=\"form-control form-control-lg\"\n            type=\"password\" \n            placeholder=\"Password\"\n            ng-model=\"$ctrl.formData.password\" />\n        </fieldset>\n    \n        \n          <button class=\"btn btn-lg btn-primary pull-xs-right\"\n            type=\"submit\"\n            ng-bind=\"::$ctrl.title\">\n          </button>\n       \n      </fieldset>\n    </form>\n    \n    </div>");
$templateCache.put("home/home.html"," <div class=\"home-page\">\n\n  <div class=\"container page\">\n    <div class=\"row\">\n        <form class=\"form-inline my-2 my-lg-0 p-search\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" ng-model=\"$ctrl.formData.search\" placeholder=\"Search\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\"\n              ng-click=\"$ctrl.changeList({ type: \'feed\', filters: $ctrl.formData.search })\">Search\n            </button>\n        </form>        \n    </div>\n    <div class=\"row\">\n\n      <div class=\"col-md-9\">\n        <div class=\"feed-toggle\">\n          <ul class=\"nav nav-tabs outline-active\">\n\n            <li class=\"nav-item\">\n              <a href=\"\" class=\"nav-link active\"\n                ng-class=\"{ active: $ctrl.listConfig.type === \'all\' && !$ctrl.listConfig.filters }\"\n                ng-click=\"$ctrl.changeList({ type: \'all\' })\">\n                Flight List\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n        <flight-list limit=\"10\" list-config=\"$ctrl.listConfig\"></flight-list>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("flight/flight.html","<div class=\"banner\">\n  <div class=\"container\">\n    <flight-item flight=\"$ctrl.flight\"></flight-item>\n  </div>\n</div>\n\n\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n<div ui-view></div>\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<footer class=\"bg-dark pt-130 mt-5\"></footer>\n");
$templateCache.put("layout/header.html","<nav class=\"jumbotron\" show-authed=\"false\">\n  <div class=\"container\">\n    <div class=\"container\">\n      <h1 class=\"logo-font text-center\" ng-bind=\"::$ctrl.appName\"></h1>\n    </div>\n</nav>\n");
$templateCache.put("components/flight/flight-item.html","<li class=\"list-group-item\">\n\n  <flight-meta flight=\"$ctrl.flight\"></flight-meta>\n\n  <a ui-sref=\"app.flight({ id: $ctrl.flight.id })\" class=\"preview-link\">\n    <h1>Flight Number: <label ng-bind=\"$ctrl.flight.flightCode\"></label></h1>\n\n    <span class=\"depart-time-label\">Depart Time: </span><label class=\"pr-40\" ng-bind=\"$ctrl.flight.departDate | date : format : medium\"></label>\n    <span class=\"arrival-time-label\">Arrival Time: </span><label ng-bind=\"$ctrl.flight.arriveDate | date : medium\"></label>\n\n    <p>Flight Status: <label ng-bind=\"$ctrl.flight.status\"></label></p>\n\n    <span>Read more...</span>\n  </a>\n</li>\n");
$templateCache.put("components/flight/flight-list.html"," \n\n<ul class=\"list-group list-group-flush\">\n  <flight-item flight=\"flight\" ng-repeat=\"flight in $ctrl.list\"></flight-item>\n</ul>\n\n<div ng-hide=\"!$ctrl.loading\">\n  Loading flight...\n</div>\n\n<div ng-show=\"!$ctrl.loading && !$ctrl.list.length\">\n  No flights are here... yet.\n</div>\n\n");
$templateCache.put("components/flight/flight-meta.html","<div class=\"card-title\">\n  <img ng-src=\"{{$ctrl.flight.author.image}}\" />\n\n  <div class=\"info\">\n    <a class=\"author\" ng-bind=\"$ctrl.flight.flightCode\"></a>\n    <span class=\"date\" ng-bind=\"$ctrl.flight.departDate | date: \'longDate\' \"></span>\n  </div>\n\n</div>\n");}]);