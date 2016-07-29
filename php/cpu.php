<?php
    require_once("func.php");

	$type =$_GET['type'];
    $data_points = array();

    $result = exec_sql("SELECT cpu_status, time(ts) as time FROM vz WHERE TS > DATE_SUB( CURRENT_TIMESTAMP(), INTERVAL 1000 MINUTE) order by ts asc limit 1000");
    while($row = mysqli_fetch_array($result)){		
        $point = array("label" => $row['time'] , "y" => $row['cpu_status']);
        array_push($data_points, $point);		
	}
	echo json_encode($data_points, JSON_NUMERIC_CHECK);
?>
