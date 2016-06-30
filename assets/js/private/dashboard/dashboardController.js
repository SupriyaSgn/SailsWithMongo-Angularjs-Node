//angular.module('DashboardModule', ['toastr']);
var sample = angular.module('DashboardModule', ['ui.router']);
sample.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('dashboard',
                    {
                        url: '/dashboard',
                        templateUrl: 'templates/yes.html',
                        
                    });
            $urlRouterProvider.otherwise('/dashboard');


//    $urlRouterProvider.otherwise('/schedulerTab/scheduler');

});





// sample.config(function($routeProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl: 'templates/dash.ejs'
//             //controller: 'FirstController'
//         })
//         .when('/attendance', {
//             templateUrl: 'templates/attendance.ejs'
//             //controller: 'FirstController'
//         })
//         .when('/bus', {
//             templateUrl: 'templates/bus.ejs'
//            // controller: 'SecondController'
//         })
//         .when('/profile', {
//             templateUrl: 'templates/profile.ejs',
//             controller: 'profileController'
//         })
// //        .when('/list', {
// //            templateUrl: 'templates/list.ejs',
// //            controller: ['$scope', '$location', function($scope, $location) {
// //
// //                    //$location.path(); // gets the current path
// //
// //        $location.path('/user');
// //
// //      }]
// //        })
//         .when('/pushsms', {
//             templateUrl: 'templates/pushsms.ejs'
//            // controller: 'SecondController'
//         });

//     });
sample.controller('DashboardController',['$scope', function($scope)
{
    SCOPE=$scope;
$scope.me = window.SAILS_LOCALS.me;
}]);
//sample.config(function ($stateProvider, $urlRouterProvider) {
//    $stateProvider
//            .state('dashboard',
//                    {
//                     //   url: '/dashboard',
//                      //  templateUrl: 'dashboard.ejs',
//                      //  controller: 'DashboardController'
//                    })
//            .state('profile',
//                    {
//                        url: '/profile',
//                        templateUrl: 'templates/profile.ejs'
//                    })
//            .state('clinic',
//                    {
//                        url: '/clinic',
//                        templateUrl: 'templates/sideMenu/clinic/clinic.ejs'
//                    })
//            .state('data',
//                    {
//                        url: '/data',
//                        templateUrl: 'templates/sideMenu/data/data.ejs'
//                    });
//
//            $urlRouterProvider.otherwise('/dashboard');
//
//
////    $urlRouterProvider.otherwise('/schedulerTab/scheduler');
//
//});






// Set up all of our HTTP requests to use a special header
// which contains the CSRF token.
// More about CSRF here: http://sailsjs.org/#/documentation/concepts/Security/CSRF.html


// Listen for url fragment changes like "#/foo/bar-baz" so we can change the contents
// of the <ng-view> tag (if it exists)

//   sample.config(['$routeProvider', function($routeProvider) {
//
//     $routeProvider
//
//     // #/    (i.e. ng-view's "home" state)
//       .when('/', {
//         template: '',
//         // If the current user is an admin, "redirect" (client-side) to `#/users`.
//         // Otherwise redirect to `#/profile`
//         controller: ['$scope', '$location', function($scope, $location) {
//           if ($scope.me.isAdmin) {
//
//             // Instead of:
//             // window.location.hash = '#/users';
//
//             // We can do it the angular way:
//             // (to avoid a bunch of weird digest loop errors)
//             $location.path('/user');
//             $location.replace();
//             return;
//           }
//
//           // Client-side redirect to `#/profile`
//           $location.path('/demo');
//           $location.replace();
//           return;
//         }]
//       })
//
//
//       // #/users
//
//
//
//
//       // #/profile
//       .when('/bus', {
//         templateUrl: 'templates/bus.ejs'
//       })
//
//
//
//       // #/?????     (i.e. anything else)
//       .otherwise({
//         redirectTo: '/'
//       });
//
//   }]);
// sample.controller('DashboardController',['$scope', function($scope)
// {
//
//   SCOPE=$scope;
//   $scope.me = window.SAILS_LOCALS.me;
// }]);
