var module = angular.module('homeModule', []);

module.config(['$routeProvider', '$stateProvider', function($routeProvider, $stateProvider) {
	$stateProvider.state('home', {
		abstract : true,
		templateUrl: "home/home.html",
		controller: "homeCtrl"
	})
	.state('home.main', {
		url: "/home",
		templateUrl: "home/main/main.html"
	})
	.state('home.signup', {
		url: "/signup",
		templateUrl: "home/signup/signup.html"
	})
	.state('home.login', {
		url: "/login",
		templateUrl: "home/login/login.html"
	})
	.state('home.about', {
		url: "/about",
		templateUrl: "home/about/about.html"
	})
	.state('home.contacts', {
		url: "/contacts",
		templateUrl: "home/contacts/contacts.html"
	});

}])

module.controller('homeCtrl', ['$location', '$scope', '$translate', '$translatePartialLoader', 
	function ($location, $scope, $translate, $translatePartialLoader) {

		$translatePartialLoader.addPart('home');
		$translatePartialLoader.addPart('home.about');
		$translatePartialLoader.addPart('home.contacts');
		$translatePartialLoader.addPart('home.login');
		$translatePartialLoader.addPart('home.signup');

		$scope.currentLanguage = "en-EN";
		$translate.use($scope.currentLanguage);

		$translate.refresh();


		$scope.isActive = function (viewLocation) { 
	        return $location.path().indexOf(viewLocation) == 0;
	    };

		$scope.selectLanguageChange = function(){
			$translate.use($scope.currentLanguage);
		}
}]);