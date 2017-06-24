
var searchTerm = $(this).attr("searchTerm");
var dropDown = $(this).attr("dropDown");
var begin_date = $(this).attr("begin_date");
var end_date = $(this).attr("end_date");

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
 'api-key': "8caeac7b374444f1bfc9e0b57b002b99",
 'q': + searchTerm,
 'begin_date': + begin_date,
 'end_date': + end_date
});


$.ajax({
 url: url,
 method: 'GET',
}).done(function(result) {
 console.log(result);
}).fail(function(err) {
 throw err;
});



for (var i = 0; i < dropDown; i++) {

results.print_headline