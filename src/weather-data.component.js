(function () {
'use strict';

angular.module('weather')
.component('weatherData', {
	templateUrl: 'src/templates/results.html',
	bindings: {
		cities: '<',
	},
	controller: WeatherSearchController,
	controllerAs: searchCtrl
});



})();