var app = angular.module('app', [
  'ngRoute',
  'ui.router',
  'homeModule',
  'pascalprecht.translate'
]);


app.config(['$urlRouterProvider', '$translateProvider', '$translatePartialLoaderProvider', 
	function($urlRouterProvider, $translateProvider, $translatePartialLoaderProvider) {

	// routing
	$urlRouterProvider.otherwise("/home");

	// i18n
	$translateProvider.useLoader('$translatePartialLoader', {
		urlTemplate: '/assets/translations/{lang}/{part}.json'
	});
  	$translateProvider.preferredLanguage('en-EN');
}]);

//@prepros-prepend ../home/home.js