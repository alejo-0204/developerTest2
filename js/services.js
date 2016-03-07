angular.module("DeveloperTest")
.factory("postQuery",function($query){

	$http.post(
		"php/layer.php",
   	{
    	data: 	{query: $query}
    })
    .success(function (movies, status) {
	    if (status == 200) {
	 		    return movies.results;
			} else 
			{ 
				console.error('Error happened while getting the movie list.');
			}		
	})
	.error(function(err){
		console.log("Error happened while getting the movie list.");				 
	});	

})