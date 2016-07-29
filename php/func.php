<?php
	header('Content-Type: application/json');
	header('Access-Control-Allow-Origin: *');

	function exec_sql($sql){

		//MySQL connections credentials
		$db_hostname = "localhost";
		$db_port = "3306";
		$db_user = "mm";
		$db_password = "Qwerty-123";
		$database = "mm";

		$conn = mysqli_connect($db_hostname, $db_user, $db_password, $database);

		// Check connection
		if (mysqli_connect_errno($conn)){
			echo "Failed to connect to Database: " . mysqli_connect_error();
		} else {
			$data_points = array();
			$result = mysqli_query($conn, $sql);
			return $result;
		}
		mysqli_close($conn);
   }
?>
