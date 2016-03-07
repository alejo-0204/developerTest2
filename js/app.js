angular.module("DeveloperTest",["ngRoute","ngResource","ui.bootstrap","youtube-embed"])
.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller: "MainController",
			templateUrl: "templates/home.html"
		})
})
.config(function($routeProvider){
	$routeProvider
		.when("/search/:InputSearch",{
			controller: "SearchController",
			templateUrl: "templates/search.html"
		})
})
.config(function($routeProvider){
	$routeProvider
		.when("/details/:id",{
			controller: "DetailController",
			templateUrl: "templates/details.html"
		})
})
.config(function($routeProvider){
	$routeProvider
		.when("/genre/:genre",{
			controller: "GenreController",
			templateUrl: "templates/genre.html"
		})
});