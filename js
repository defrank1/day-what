// Function to calculate days since November 5, 2024
function calculateDaysSince() {
    // Set the target date (November 5, 2024)
    const targetDate = new Date('2024-11-05');
    
    // Get the current date
    const currentDate = new Date();
    
    // Calculate the difference in milliseconds
    const diffInMs = currentDate - targetDate;
    
    // Convert milliseconds to days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    // Display the result
    document.getElementById('days-since').textContent = `Day ${diffInDays}`;
}

// Event listener for the red button click
$('button').on('click', function () {
    var classList = $(this).attr("class");

    if (classList === 'red-button') {
        // Display the days since November 5, 2024, when the red button is clicked
        calculateDaysSince();

        // Additional styling and information for the red button

        $('body').css('background-color', 'crimson');
        $('.right-column').css('color', 'white');
        $('.service_introduced').text(service_introduced_year);
        $('.number_of_stations').text(number_of_stations);
        $('.distance_in_miles').text(distance_in_miles);
        $('.line_termini').text(line_termini);
    }
    // Additional code for other buttons...
});
