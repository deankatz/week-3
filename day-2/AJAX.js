// Exercise 1 

// const fetch = function (isbn) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }});}

// fetch(1440633908) 
// Exercise 2 

// const fetch = function (queryType, queryValue) {
//    $.ajax({
//        method: "GET",
//        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//        success: function (data) {
//            console.log(data);
//        },
//        error: function (xhr, text, error) {
//            console.log(text);
//        }
//    }); 
// }

// fetch("title", "The Wise Man's Fears")
// fetch("isbn", 9789814561778) 

//  Exercise 3

// const fetch = function (queryType, queryValue) {
//   $.ajax({
//       method: "GET",
//       url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//       success: function (data) {
//           data.items.forEach(b => console.log(`Title: ${b.volumeInfo.title}, Author: ${b.volumeInfo.authors}, ISBN: ${b.volumeInfo.industryIdentifiers[0].identifier}`))
//       },
//       error: function (xhr, text, error) {
//           console.log(text);
//       } });}
 

// fetch("title", "The Wise Man's Fears") 


// Exercise 4 


// const fetch = function () {
//     $.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=3iUDEIEPlI3IGfY4YRdQCsAoxEBy2p86", function (gifs) {
//         console.log(gifs.data[0].embed_url)
//         $(".gif").append(`<iframe src="${gifs.data[0].embed_url}">`)
//     })}

// fetch() 

// Exercise 5


const fetch = function (input) {
    $.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=3iUDEIEPlI3IGfY4YRdQCsAoxEBy2p86`, function (gifs) {
        //console.log(gifs.data[0].embed_url)
        $(".gif").append(`<iframe src="${gifs.data[0].embed_url}">`)
    })
}
// //javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });
	

$("#submit").on("click", function () {
    let input = $("#yourgif").val()
    console.log(input)
    fetch(input)
})
 

