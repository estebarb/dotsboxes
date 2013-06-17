angular.module('dotsboxes', []).config(function($routeProvider) {
	$routeProvider.when("/help", {
		templateUrl : "/app/partials/help.html"
	}).when("/", {
		templateUrl : "/app/partials/frontpage.html"
	}).otherwise({
		redirectTo : "/"
	});
});