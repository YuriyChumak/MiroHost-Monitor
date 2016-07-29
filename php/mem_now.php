<?php
	require_once("func.php");

	$result = exec_sql("SELECT truncate((mem_total - mem_free) * 100 /mem_total, 0) as mem_usage FROM vz order by ts desc limit 1");
	$row = mysqli_fetch_array($result);
    $mem_usage = $row['mem_usage'];

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
        { "c":[ { "v": "Memory" }, { "v": '.$mem_usage.' } ] }
    ]
}
';
?>
