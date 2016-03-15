var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.when('/usuarios', {
			templateUrl: 'templates/usuarios/listar.html',
			controller: 'UserCtrl'
		})
		
		.otherwise({ redirectTo: '/' });
}]);