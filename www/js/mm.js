 /* MM.JS */   
    window.onload = function () {
        // Canvas colorset
        CanvasJS.addColorSet("icmpColors",
                [
                "red"
                ]);
        
        CanvasJS.addColorSet("httpColors",
                [
                "blue"
                ]);
        
        CanvasJS.addColorSet("httpsColors",
                [
                "green"
                ]);
        
        CanvasJS.addColorSet("mysqlColors",
                [
                "yellow"
                ]);

        CanvasJS.addColorSet("memColors",
                [
                "grey",
                "orange"
                ]);

        CanvasJS.addColorSet("cpuColors",
                [
                "darkgreen"
                ]);
        
        CanvasJS.addColorSet("spaceColors",
                [
                "grey",
                "yellow"
                ]);
        
        CanvasJS.addColorSet("spaceColumnColors",
                [
                "darkblue",
                "gold"
                ]);

        CanvasJS.addColorSet("pieColors",
                [
                "red",
                "blue",
                "green",
                "gold"                
                ]);
        // ICMP
        var icmpRefresh = function () {
            $.getJSON("http://control.mirohost.devua.net/mm/ping.php?type=icmp", function (result){
                var chart = new CanvasJS.Chart("icmpChart",
                {
                    zoomEnabled: true,
                    animationEnabled: true,
                    colorSet: "icmpColors",
                    title:{
                        text: "PING"
                    },
                    axisY:{
                        includeZero: false
                    },
                    data:[
                    {
                        type: "line",
                        dataPoints: result
                    }]
                });
                chart.render(); 
            });
            //chart.render();
        }
        icmpRefresh();
        //setInterval(function(){icmpRefresh()}, 5000);

        // HTTP
        var httpRefresh = function () {
            $.getJSON("http://control.mirohost.devua.net/mm/ping.php?type=http", function (result){
                var chart = new CanvasJS.Chart("httpChart",
                {
                    zoomEnabled: true,
                    colorSet: "httpColors",
                    animationEnabled: true,
                    title:{
                        text: "HTTP"
                    },
                    axisY:{
                        includeZero: false
                    },
                    data:[
                    {
                        type: "line",
                        dataPoints: result
                    }]
                });
                chart.render(); 
            });
            //chart.render();
        }
        httpRefresh();
        //setInterval(function(){httpRefresh()}, 5000);   

        // HTTPS
        var httpsRefresh = function () {
            $.getJSON("http://control.mirohost.devua.net/mm/ping.php?type=https", function (result){
                var chart = new CanvasJS.Chart("httpsChart",
                {
                    zoomEnabled: true,
                    animationEnabled: true,
                    colorSet: "httpsColors",
                    title:{
                        text: "HTTPS"
                    },
                    axisY:{
                        includeZero: false
                    },
                    data:[
                    {
                        type: "line",
                        dataPoints: result
                    }]
                });
                chart.render(); 
            });
            //chart.render();
        }
        httpsRefresh();
        //setInterval(function(){httpsRefresh()}, 5000);

        // MySQL
        var mysqlRefresh = function () {
            $.getJSON("http://control.mirohost.devua.net/mm/ping.php?type=mysql", function (result){
                var chart = new CanvasJS.Chart("mysqlChart",
                {
                    zoomEnabled: true,
                    colorSet: "httpsColors",
                    animationEnabled: true,
                    title:{
                        text: "MySQL"
                    },
                    axisY:{
                        includeZero: false
                    },
                    data:[
                    {
                        type: "line",
                        dataPoints: result
                    }]
                });
                chart.render(); 
            });
            //chart.render();
        }
        mysqlRefresh();
        //setInterval(function(){mysqlRefresh()}, 5000);

        // CPU
        var cpuRefresh = function () {
            $.getJSON("http://control.mirohost.devua.net/mm/cpu.php", function (result){
                var chart = new CanvasJS.Chart("cpuChart",
                {
                    zoomEnabled: true,
                    colorSet: "cpuColors",
                    animationEnabled: true,
                    title:{
                        text: "CPU"
                    },
                    axisY:{
                        includeZero: false
                    },
                    data:[
                    {
                        type: "line",
                        dataPoints: result
                    }]
                });
                chart.render(); 
            });
            //chart.render();
        }
        cpuRefresh();
        //setInterval(function(){httpsRefresh()}, 5000);

        // Memory usage
        $.getJSON("http://control.mirohost.devua.net/mm/mem.php", function (result){
            var chart = new CanvasJS.Chart("memChart",
            {
                zoomEnabled: true,
                theme: "theme3",
                animationEnabled: true,
                colorSet: "memColors",
                data:[
                {
                    type: "pie",
                    toolTipContent: "{y} - #percent %",
                    yValueFormatString: "#. Мбайт",
                    legendText: "{label}",
                    dataPoints: result
                }]
            });
            chart.render(); 
        });

        // Disk usage
        $.getJSON("http://control.mirohost.devua.net/mm/space.php", function (result){
            var chart = new CanvasJS.Chart("spaceChart",
            {
                zoomEnabled: true,
                theme: "theme3",
                animationEnabled: true,
                colorSet: "spaceColors",
                data:[
                {
                    type: "pie",    
                    toolTipContent: "{y} - #percent %",
                    yValueFormatString: "#. Гбайт",
                    legendText: "{label}",
                    dataPoints: result
                }]
            });
            chart.render(); 
        });

        // Log messages
        $("#logMessages").load("http://control.mirohost.devua.net/mm/log.php");

        /* Test Pie Chart */
        var chart = new CanvasJS.Chart("pieChart",
        {
            theme: "theme2",
            colorSet: "pieColors",
            title:{
                text: "В разрезе стран"
            },
            data: [
            {
                type: "pie",
                toolTipContent: "{y}%",
                showInLegend: true,
                yValueFormatString: "#. #",
                legendText: "{label}",
                dataPoints: [
                    {  y: 23, label: "Украина", legendText: "UA", exploded: true },
                    {  y: 27, label: "Европа", legendText: "EU", exploded: true },
                    {  y: 33, label: "Америка", legendText: "USA" },
                    {  y: 17, label: "Прочие страны", legendText: "Others", exploded: true},
                ]
            }
            ]
        });
        chart.render();

        // Disk usage
        $.getJSON("http://control.mirohost.devua.net/mm/space_column.php", function (result){
            var chart = new CanvasJS.Chart("spaceColumn",
            {
                zoomEnabled: true,
                theme: "theme3",
                animationEnabled: true,
                axisY: {
                    title: "Гигабайт"
                },
                colorSet: "spaceColumnColors",
                data:[
                {
                    type: "column",    
                    toolTipContent: "{y}",
                    yValueFormatString: "#. Гбайт",
                    legendText: "{label}",
                    dataPoints: result
                }]
            });
            chart.render(); 
        });
    }