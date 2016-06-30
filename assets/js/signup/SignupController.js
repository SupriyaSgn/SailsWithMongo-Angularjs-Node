 angular.module('SignupModule',['ui.router', 'toastr', 'ui.bootstrap', 'xeditable','mwl.calendar','ngAnimate']).controller('SignupController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

	// set-up loading state
	$scope.signupForm = {
		loading: false
	}

	$scope.submitSignupForm = function(){

		// Set the loading state (i.e. show loading spinner)
		$scope.signupForm.loading = true;

		// Submit request to Sails.
		$http.post('/signup', {
             userID:$scope.generate,
			firstname: $scope.signupForm.firstname,
			lastname: $scope.signupForm.lastname,
			mobile: $scope.signupForm.mobile,
			title: $scope.signupForm.title ,
			gender: $scope.signupForm.gender,
			dob:$scope.signupForm.dob,
			email: $scope.signupForm.email,
			password: $scope.signupForm.password
		})
		.then(function onSuccess(sailsResponse){
			window.location = '/';
		})
		.catch(function onError(sailsResponse){

		// Handle known error type(s).
		// If using sails-disk adpater -- Handle Duplicate Key
		var emailAddressAlreadyInUse = sailsResponse.status == 409;

		if (emailAddressAlreadyInUse) {
			toastr.error('That email address has already been taken, please try again.', 'Error');
			return;
		}

		})
		.finally(function eitherWay(){
			$scope.signupForm.loading = false;
		})
	};


 $scope.generate=new Date().valueOf();
	


	
 $scope.date = {};

 $scope.days = [];
 for (var i = 1; i <= 31; i++) { $scope.days.push(i); }

 $scope.months = [];
 for (var i = 1; i <= 12; i++) { $scope.months.push(i); }

 $scope.years = [];
 for (var i = 1940; i <= (new Date().getFullYear()); i++) {
 $scope.years.push(i);
 }


 


	
	$scope.submitLoginForm = function (){

    // Set the loading state (i.e. show loading spinner)
    $scope.loginForm.loading = true;

    // Submit request to Sails.
    $http.put('/login', {
      email: $scope.loginForm.email,
      password: $scope.loginForm.password
    })
    .then(function onSuccess (){
      // Refresh the page now that we've been logged in.
      window.location = '/';
    })
    .catch(function onError(sailsResponse) {

      // Handle known error type(s).
      // Invalid username / password combination.
      if (sailsResponse.status === 400 || 404) {
        // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
        //
        toastr.error('Invalid email/password combination.', 'Error', {
          closeButton: true
        });
        return;
      }

				toastr.error('An unexpected error occurred, please try again.', 'Error', {
					closeButton: true
				});
				return;

    })
    .finally(function eitherWay(){
      $scope.loginForm.loading = false;
    });
  };


// $scope.today = function() {
//     $scope.dt = new Date();
//   };
//   $scope.today();

//   $scope.clear = function() {
//     $scope.dt = null;
//   };

//   // Disable weekend selection
//   $scope.disabled = function(date, mode) {
//     return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
//   };

//   $scope.toggleMin = function() {
//     $scope.minDate = $scope.minDate ? null : new Date();
//   };

//   $scope.toggleMin();
//   $scope.maxDate = new Date(2020, 5, 22);

//   $scope.open1 = function() {
//     $scope.popup1.opened = true;
//   };

//   $scope.open2 = function() {
//     $scope.popup2.opened = true;
//   };

//   $scope.setDate = function(year, month, day) {
//     $scope.dt = new Date(year, month, day);
//   };

//   $scope.dateOptions = {
//     formatYear: 'yy',
//     startingDay: 1
//   };

//   $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
//   $scope.format = $scope.formats[0];
//   $scope.altInputFormats = ['M!/d!/yyyy'];

//   $scope.popup1 = {
//     opened: false
//   };

//   $scope.popup2 = {
//     opened: false
//   };

//   var tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   var afterTomorrow = new Date();
//   afterTomorrow.setDate(tomorrow.getDate() + 1);
//   $scope.events =
//     [
//       {
//         date: tomorrow,
//         status: 'full'
//       },
//       {
//         date: afterTomorrow,
//         status: 'partially'
//       }
//     ];

//   $scope.getDayClass = function(date, mode) {
//     if (mode === 'day') {
//       var dayToCheck = new Date(date).setHours(0,0,0,0);

//       for (var i = 0; i < $scope.events.length; i++) {
//         var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

//         if (dayToCheck === currentDay) {
//           return $scope.events[i].status;
//         }
//       }
//     }

//     return '';
//   };



}]);

