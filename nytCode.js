// UI Team:
// Begin creating basic click events. Register the submit button
// clear

//#clear-all

$("#clear-all").on("click", function() {
    $("#search-term").val("");
    $("#num-records-select").val("");
    $("#start-year").val("");
    $("#end-year").val("");

})
// submit

$("#run-search").on("click", function() {
    event.preventDefault();
    console.log("click");
    var searchTerm = $("#search-term").val();
    var records = $("#num-records-select").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();
console.log(searchTerm)
})

// Get the data from the text-boxes and store as variables.


// Experiment with creating content regions for where the article will go.
// empty divs?