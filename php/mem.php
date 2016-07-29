<?php
	require_once("func.php");

	$data_points = array();

	$result = exec_sql("SELECT * FROM vz order by ts desc limit 1");
	while($row = mysqli_fetch_array($result)){		
		$point = array("y" => $row['mem_free'], "label" => 'Free', "exploded" => 'true');
		array_push($data_points, $point);		
		$point = array("y" => ($row['mem_total'] - $row['mem_free']), "label" => 'Used', "exploded" => 'true');
		array_push($data_points, $point);		
	}
	echo json_encode($data_points, JSON_NUMERIC_CHECK);
?>
