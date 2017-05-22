(function () {
'use strict';

angular.module('weather')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'src/templates/home.html', 
			controller: 'WeatherSearchController',
			controllerAs: 'weatherSearch',
			resolve: {
				cityData: ['WeatherService', function (WeatherService) {
					return WeatherService.getCityData();
				}]
			}
		})
		.state('home.result', {
			url: 'forecast/{city}',
			templateUrl: 'src/templates/results.html',
			controller: 'WeatherResultsController',
			controllerAs: 'resultsCtrl',
			resolve: {
				weatherData: ['$stateParams', 'WeatherService', function ($stateParams, WeatherService) {
					return WeatherService.getWeatherData($stateParams.city);
				}]
			}
		});
}



})()