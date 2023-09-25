// Load the Google Charts library
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback function to run when the library is loaded
google.charts.setOnLoadCallback(drawChart);

// Callback function to draw the chart
function drawChart() {
    // Replace this data with your actual token distribution data
    var data = google.visualization.arrayToDataTable([
        ['Category', 'Percentage'],
        ['Project Development', 40],
        ['Team Members and Advisors', 10],
        ['Liquidity Pool', 30],
        ['Community Airdrops', 20]
    ]);

    // Define chart options
    var options = {
        title: 'Belly Token Initial Allocation',
        width: 400,
        height: 300,
        is3D: true, // This option creates a 3D pie chart
    };

    // Create a new chart and attach it to the specified HTML element
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

    // Draw the pie chart with the data and options
    chart.draw(data, options);
}

