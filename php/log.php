<?php
	require_once("func.php");

	$host = "www.cam.ac.uk";
	$type = $_GET['type'];
	$data_points = array();

	$result = exec_sql("SELECT * FROM log WHERE host = '$host' and TS > DATE_SUB( CURRENT_TIMESTAMP(), INTERVAL 2000 MINUTE) group by description limit 10");
	while($row = mysqli_fetch_array($result)){		
		$point = $row['ts']." ".$row['description']."<br>";
		echo $point;
    }
?>
