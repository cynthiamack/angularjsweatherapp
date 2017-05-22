(function (){
'use strict';

angular.module('weather', ['ui.router'])
.constant('ApiPath', 'http://api.openweathermap.org/data/2.5/')
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=4689a552c6a4ae441932d3634711bd8e
.constant('ApiId', '4689a552c6a4ae441932d3634711bd8e')
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

	// If user goes to a path that doesn't exist, redirect to public root

	$urlRouterProvider.otherwise('/');
}



})();