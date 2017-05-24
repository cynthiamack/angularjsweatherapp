(function () {
'use strict';

angular.module('weather')
.service('WeatherService', WeatherService);

WeatherService.$inject = ['$http', 'ApiPath', 'ApiId'];
function WeatherService($http, ApiPath, ApiId) {
	var service = this;

	service.getCityData = function () {
		return $http.get('lib/city.list.json').then(function (response) {
			return response.data;

		});
	};

	service.getWeatherData = function (id) {
		console.log(id);
		var config = {};
		var reg = new RegExp('\d{5}');
		config.params = {'APPID': ApiId};

		if (reg.test(id)) {
			return $http.get(ApiPath + "weather?" + "zip=" + id, config).then(function (response) {
				return response.data;
			}) 
		}

		else {
			return $http.get(ApiPath + "weather?" + "q=" + id, config).then(function (response) {
				return response.data;
			})
		}

	}

	service.convertToFahrenheit = function (temp) {
		var returnTemp = (9  * (temp - 273))/5 + 32
		return Math.round(returnTemp);
	}

}

})();