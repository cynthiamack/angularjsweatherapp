(function () {
'use strict';

angular.module('weather')
.controller('WeatherResultsController', WeatherResultsController);

WeatherResultsController.$inject = ['WeatherService', 'weatherData'];
function WeatherResultsController(WeatherService, weatherData) {
	var ctrl = this;
	ctrl.cityName = weatherData.name;
	ctrl.country = weatherData.sys.country;
	ctrl.city = WeatherService.city;
	console.log(weatherData);
	ctrl.weather = weatherData.weather[0];
	ctrl.temp = WeatherService.convertToFahrenheit(weatherData.main.temp);
	ctrl.tempMax = WeatherService.convertToFahrenheit(weatherData.main.temp_max);
	ctrl.tempMin = WeatherService.convertToFahrenheit(weatherData.main.temp_min);

/*	ctrl.convertToFahrenheit = function () {
		ctrl.temp = (9  * (ctrl.temp - 273))/5 + 32
		console.log(ctrl.temp);
	}*/



}

})();