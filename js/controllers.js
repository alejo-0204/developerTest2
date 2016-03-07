angular.module("DeveloperTest")
.run(function($rootScope,$http){
	$rootScope.myInterval = 3000;	
	$rootScope.InputSearch = "";
	$rootScope.GenreAction = 28;
	$rootScope.GenreAventure = 12;
	$rootScope.GenreScienceFiction = 878;
	$rootScope.ActualTab = 0;
	$rootScope.InputSearch = null;
	$rootScope.ApiKey = "api_key=b039c5475dd61fb3fe2f3ceebcd67ae6";
  
   	$http.post(
		"php/layer.php",
   	{
    	data: 	{query: "http://api.themoviedb.org/3/movie/now_playing?&"+$rootScope.ApiKey+"&sort_by=release_date.desc"}
    })
    .success(function (movies, status) {	   
	 	$rootScope.slides = movies.results;			
	})	

})
.controller("MainController", function($scope,$http,$rootScope){
	$rootScope.ActualTab = 0;			
})
.controller("SearchController", function($scope,$http,$resource,$routeParams,$rootScope){	

	$http.post(
	"php/layer.php",
   	{
    	data: 	{query: "http://api.themoviedb.org/3/search/person?query="+$routeParams.InputSearch+"&"+$rootScope.ApiKey+"&sort_by=release_date.desc"}
    })
    .success(function (result, status) {
	    $scope.moviesByActor = result;	
	});	

	$http.post(
	"php/layer.php",
   	{
    	data: 	{query: "http://api.themoviedb.org/3/search/movie?query="+$routeParams.InputSearch+"&"+$rootScope.ApiKey+"&sort_by=release_date.desc"}
    })
    .success(function (result, status) {
	 	$scope.moviesResult = result;	
	});	
	$rootScope.ActualTab = null;
})
.controller("DetailController", function($scope,$http,$resource,$routeParams,$rootScope){	

	$http.post(
	"php/layer.php",
   	{
    	data: 	{query: "http://api.themoviedb.org/3/movie/"+$routeParams.id+"?"+$rootScope.ApiKey}
    })
    .success(function (result, status) {
	    $scope.MovieDetail = result;				
	});	

	$http.post(
		"php/layer.php",
   	{
    	data: 	{query: "http://api.themoviedb.org/3/movie/"+$routeParams.id+"/videos?"+$rootScope.ApiKey}
    })
    .success(function (result, status) {
    	$scope.VideoDetail = result;	
	});	

})
.controller("GenreController", function($scope,$http,$resource,$routeParams,$rootScope){	

	GetGenres = $resource("https://api.themoviedb.org/3/discover/movie?api_key=66ddf266d5a95c3d2f0e4637fe6e9a36&with_genres=:genre",{genre:"@genre"}); 			
	$scope.moviesByGenre = GetGenres.get({genre: $routeParams.genre});
	$rootScope.ActualTab = $routeParams.genre;
});
