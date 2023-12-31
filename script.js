// Load the Google Charts library
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback function to run when the library is loaded
google.charts.setOnLoadCallback(drawChart);

// Callback function to draw the chart
function drawChart() {
    // Replace this data with your actual token distribution data
    var data = google.visualization.arrayToDataTable([
        ['Category', 'Percentage'],
        ['Project Development', 20],
        ['Team Members and Advisors', 10],
        ['Liquidity Pool', 50],
        ['Community Airdrops', 20]
    ]);

    // Define chart options
    var options = {
        title: 'Belly Token Initial Allocation',
        width: 400,
        height: 300,
        is3D: true, // This option creates a 3D pie chart
        backgroundColor: 'transparent',
        titleTextStyle: {
            color: 'white' // Set the title font color to white
        },
        legend: {
            textStyle: {
                color: 'white' // Set the legend font color to white
            }
        }
    };

    // Create a new chart and attach it to the specified HTML element
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

    // Draw the pie chart with the data and options
    chart.draw(data, options);
}

