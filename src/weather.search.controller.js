(function () {
"use strict";

angular.module('weather')
.controller('WeatherSearchController', WeatherSearchController);

WeatherSearchController.$inject = ['WeatherService', 'cityData'];
function WeatherSearchController(WeatherService, cityData) {
	var ctrl = this;
	ctrl.cityData = cityData;

		/*
		Verifies if the city is in the city.list.json and if it is sets the control city 
		property to the right city with the right country (if it was included)

		*/


/*	ctrl.verifyCity = function(cityName) {
		var name = cityName;
		var cities = $.grep(cityData, function(e) {return e.name === name; });
		console.log(cities);
			if (cities.length != 0){
				ctrl.error = false;
				//ctrl.successMessage = ctrl.city.name + ", " + ctrl.city.country;
				if (hasCountry === true)
				return true;
			}
			else {
				ctrl.error = true
				return false;
			}
	}
*/

	ctrl.toTitleCase = function(str) {
		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	ctrl.verifyCity = function (hasCountry) {
		var name = ctrl.cityName;
		var cities = $.grep(cityData, function(e) {return e.name === name; });
		console.log(cities);
			if (cities.length != 0){
					if (hasCountry === false){
						ctrl.city = cities[0];
						ctrl.error = false;
						ctrl.successMessage = ctrl.city.name + ", " + ctrl.city.country;
						return true;
			}
					else {
						var cityFound = false;
						ctrl.error = true;
						cities.forEach(function(c) {
							if (ctrl.country === c.country) {
								ctrl.city = c;
								ctrl.error = false;
								ctrl.successMessage = ctrl.city.name + ", " + ctrl.city.country;
								cityFound = true;
							}
						})
						return cityFound;
					}
			}
			else {
				ctrl.error = true;
				return false;				
			}
	}


	ctrl.submit = function () {
		if (ctrl.cityName.includes(",")){
			var cityAndCountry = ctrl.cityName.split(",");
			ctrl.cityName = ctrl.toTitleCase(cityAndCountry[0]);
			ctrl.country = cityAndCountry[1].replace(/\s/g, '');
			ctrl.country = ctrl.country.toUpperCase();
			ctrl.verifyCity(true)
			
		}
		else {
			ctrl.cityName = ctrl.toTitleCase(ctrl.cityName);
			ctrl.verifyCity(false)


		}
		WeatherService.city = ctrl.city;
	}

	ctrl.zipSubmit = function () {
		console.log(ctrl.cityName);
		ctrl.error = false;
	}

}

})();