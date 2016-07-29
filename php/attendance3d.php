<?php
    require_once("func.php");

    echo '
{
    "cols": [
        {
            "id": "",
            "label": "Country",
            "type": "string" 
        },
        {
            "id": "",
            "label": "Percent",
            "type": "number" 
        }
    ],
    "rows": [
        { "c":[ { "v": "Украина" }, { "v": 230000 } ] },
        { "c":[ { "v": "Европа" }, { "v": 170000 } ] }, 
        { "c":[ { "v": "Америка" }, { "v": 300000 } ] }, 
        { "c":[ { "v": "Прочие" }, { "v": 300000 } ] } 
    ]
}
';
?>
