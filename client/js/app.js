angular.module('app', ['ngRoute', 'ngResource', 'fact.controller', 'fact.service','file.controller','show.controller','show.service'])
  .filter('trustHTML', function($sce) {
    return function(text){
      return $sce.trustAsHtml(text);
    };
  })
  .config(['$routeProvider', '$locationProvider', 
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/fact.html',
          controller: 'FactController'
        })
        .when('/file', {
          templateUrl: 'views/file.html',
          controller: 'FileController'
        })
        .when('/schedule', {
          templateUrl: 'views/schedule.html',
          controller: 'ScheduleController'
        })
        .when('/show/:id', {
          templateUrl: 'views/show1.html',
          controller:'ShowController',
          resolve: {
            show : function($route, ShowService){
            return ShowService.get({ id: $route.current.params.id})
            }
          }
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
  }]);

