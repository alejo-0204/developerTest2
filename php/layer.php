<?php
	/**
	 * Communication layer with the movie database API
	 */
	//echo $_POST["id"];
 	$data = file_get_contents("php://input");
    $postData = json_decode($data);

	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL, $postData -> data -> query);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_HEADER, FALSE);

	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
	  "Accept: application/json"
	));

	$response = curl_exec($ch);
	curl_close($ch);

	echo $response;
?>