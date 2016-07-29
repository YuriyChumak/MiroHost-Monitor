<?php
	require_once("func.php");

	$result = exec_sql("SELECT truncate(cpu_status, 0) as cpu_status FROM vz order by ts desc limit 1");
	$row = mysqli_fetch_array($result);
    $cpu_status = $row['cpu_status'];

    echo '
{
    "cols": [
        {
            "id": "",
            "label": "Label",
            "type": "string" 
        },
        {
            "id": "",
            "label": "Value",
            "type": "number" 
        }
    ],
    "rows": [
        { "c":[ { "v": "CPU" }, { "v": '.$cpu_status.' } ] }
    ]
}
';
?>
