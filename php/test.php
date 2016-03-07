<?php
	/**
	 * Communication layer with the movie database API
	 */
	//echo $_POST["id"];
 	$data = file_get_contents("php://input");
    $postData = json_decode($data);


	echo $postData -> data -> query;
?>