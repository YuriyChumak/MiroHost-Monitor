<?php
	require_once("func.php");

	$data_points = array();

	$result = exec_sql("SELECT truncate(space_free/1024, 0) as space_free, truncate(space_total/1024, 0) as space_total FROM vz order by ts desc limit 1");
	while($row = mysqli_fetch_array($result)){		
		$point = array("y" => $row['space_free'], "label" => 'Free', "exploded" => 'true');
		array_push($data_points, $point);		
		$point = array("y" => ($row['space_total'] - $row['space_free']), "label" => 'Used', "exploded" => 'true');
		array_push($data_points, $point);		
	}
	echo json_encode($data_points, JSON_NUMERIC_CHECK);
?>
