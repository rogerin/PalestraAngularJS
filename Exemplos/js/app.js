angular.module('app', ['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/home.html',
				controller: 'HomeCtrl'
			})
			.when('/usuario', {
				templateUrl: 'templates/usuario.html',
				controller: 'UserCtrl'
			})
			.otherwise({ redirectTo: '/' });
	}])
	.controller('HomeCtrl', ['$scope', function ($scope) {
		console.log('HomeCtrl');
	}])
	.controller('UserCtrl', ['$scope', function ($scope) {
		console.log('UserCtrl');
	}]);