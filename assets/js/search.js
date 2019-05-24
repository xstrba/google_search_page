///////////////////////////////////////////////////////
// File containing functions for searhing using gapi //
// Created by: Boris Strbak                          //
///////////////////////////////////////////////////////

"use strict";

//api key and google search engine
//api allows 100 searches per day
var API_KEY = "AIzaSyA5EIM-wmjTPGKRACzSYTgXKKMF9mMNe6c";
var CX = "017829095110677315037:9nsdcft82tg";

//appends given queries to url
//url -> to which queries should be appended
//queries -> url parameters
function setUrlQueries(url, queries) {

    for (var key in queries) {

        url += "&" + key + "=" + queries[key];

    }

    return url;
}

//creates script which returns results from gapi
//queries -> search parameters
function search(queries) {

    try {

        var searchScript = document.createElement('script');
        var url = "https://www.googleapis.com/customsearch/v1?"
        +"key="+API_KEY+"&cx="+CX+"&fields=items,queries";

        searchScript.id = 'searchScript';
        searchScript.src = setUrlQueries(url, queries);


        document.body.appendChild(searchScript);

    } catch(err) {

        console.log("Error: loading search api -> " + err);

    }

    return;

}

//searches for images
//input -> search search
// destEl -> destination element
function triggerSearchImg(input, destEl) {

    destEl.innerHTML = '';

    //change this loop to change number of results given
    //each iteration returns 6 images
    //at the end it returns 12 images
    for (var i = 0; i < 2; i++){

        var queries = {
            q: input,
            start: i*6+1,
            searchType: 'image',
            callback: "handleResponseImages",
            num: 6,
        };

        search(queries);

    }

    return;

}

//searches for Web results
//input -> search search
//destEl -> destination element
//startIndex -> index at which search begins
function triggerSearchWebs(input, destEl, startIndex) {

    try {
        if(isNaN(startIndex) || startIndex < 1)
            throw "Start index is not a valid number.";

        destEl.innerHTML = '';

        var queriesWeb = {
            q: input,
            start: startIndex,
            callback: "handleResponseWebs",
            num: 4, //at once returns 4 results -> if you want you can change it
                    //but 4 is optimal for good look
        };

        search(queriesWeb);
    } catch(err) {

        alert("Error: triggerSearchWebs -> " + err);

    }

    return;

}

//zooms images and shows them oer the whole page
//url -> link to image
//alt -> name of image
//linkTo -> link to source page of image #not the google one
function showImg(url, alt, linkTo) {

    //create div which will cover the page
    var imgDiv = document.createElement('div');
    imgDiv.className = "img-div";

    //this div will be used to return back
    var coverDiv = document.createElement('div');
    coverDiv.className = "cover-div";
    coverDiv.onclick = function() { imgDiv.parentNode.removeChild(imgDiv) };

    //div which will contain img and link
    var imgEl = document.createElement('div');
    imgEl.className = "image";

    //image
    var img = document.createElement('img');
    img.src = url;
    img.alt = alt;

    //link to source of image
    var link = document.createElement('a');
    link.href = linkTo;
    link.target = "_blank";
    link.innerHTML = alt;

    imgEl.appendChild(img);
    imgEl.appendChild(link);

    imgDiv.appendChild(coverDiv);
    imgDiv.appendChild(imgEl);

    document.body.appendChild(imgDiv);

    return;

}
