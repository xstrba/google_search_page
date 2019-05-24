///////////////////////////////////////////////////////////
// File containing functions which inicializes searching //
// using gapi                                            //
// Created by: Boris Strbak                              //
///////////////////////////////////////////////////////////

"use strict";

//clips "limit" characters from given string
// limit -> max number of characters taken from string
// string to clip
function clipString(string, limit) {

    try {

        if(isNaN(limit) || limit < 1)
            throw "Use proper number";

        if(string.length > limit)
            string = string.substring(0, limit) + " ...";

    } catch(err) {

        alert("Error: clipping string -> " + err);
        return 1;

    }

    return string;

}

//processes response for image results
//response -> response from gapi
function handleResponseImages(response) {

    // console.log(response); //debugging
    var destEl = document.getElementById('resultImages');

    try {

        if(response == null)
            throw "Some big mistake happend. Problably on the server side.";

        if(response.error != null)
            throw response.error.message;

        if(response.items == null || response.items.length <= 0)
            throw "Could't find any results for your search pattern.";

        for (var i = 0; i < response.items.length; i++) {

            var item = response.items[i];
            //creates div containing image for every item
            destEl.innerHTML += "<div class='item' onclick=\"showImg('"
            +item.link+"', '"+item.htmlTitle+"','"+item.image.contextLink+"')\">"
                                +"<img src='"+item.image.thumbnailLink+"' alt='"+item.title+"'></img>"
                                +"</div>";

        }

    } catch(err) {

        destEl.innerHTML = "Error: " + err;

    }

    return;

}

//changes search page for web results
//curIndex -> current start index of results
//nextIndex -> next start index of results
function changeSearchPage(curIndex, nextIndex) {

    try {

        if(isNaN(curIndex) || isNaN(nextIndex) || curIndex < 1 || nextIndex < 1)
            throw "Not valid numbers to get valid response.";

        if(curIndex != nextIndex){

            var destEl = document.getElementById('resultWebs');
            var searchInput = document.getElementById('searchString').value;
            triggerSearchWebs(searchInput, destEl, nextIndex);

        }

    } catch(err) {

        alert("Error: " + err);

    }

    return;

}

//processes response for web results
//response -> response from gapi
function handleResponseWebs(response) {

    // console.log(response); //debugging
    var destEl = document.getElementById('resultWebs');

    try {

        if(response == null)
            throw "Some big mistake happend. Problably on the server side.";

        if(response.error != null)
            throw response.error.message;

        if(response.items == null || response.items.length <= 0){

            if(response.queries.request[0].startIndex > 1)
                throw 1;
            else
                throw "Could't find any results for your search pattern.";

        }

        for (var i = 0; i < response.items.length; i++) {

            var item = response.items[i];

            //gets only first 125 chars from item snippet
            item.snippet = clipString(item.snippet, 125);

            //gets only first 60 chars from item title
            item.htmlTitle = clipString(item.htmlTitle, 60);

            //creates div containing header, link, and snippet for every item
            destEl.innerHTML += "<div class='item'>"
                                    +"<h3>"+item.htmlTitle+"</h3>"
                                    +"<a href='"+item.link+"' target='_blank'>"+item.formattedUrl+"</a>"
                                    +"<p>"+item.snippet+"</p>"
                                +"</div>";

        }

    } catch(err) {

        if(err === 1){

            destEl.innerHTML += "Error: No more results on this page.";

        } else {

            destEl.innerHTML = "Error: " + err;
            return;

        }

    }

    //string containing elements representing navigation links section
    var string = "<div class=\"navlinks\">"
                            +"<ul>";

    //change number of iterations to have different number of pages
    //currently set to 3 pages
    for(var i = 0; i < 3; i++){

        var curIndex = response.queries.request[0].startIndex;

        //ads li elements to navlinks
        //current index is active othres not
        if(curIndex == (i*4)+1)
            string += "<li class=\"active\" onclick=\"changeSearchPage("+curIndex+", "+((i*4)+1)+")\">"
                        +(i+1)+"</li>";
        else
            string += "<li onclick=\"changeSearchPage("+curIndex+", "+((i*4)+1)+")\">"
                    +(i+1)+"</li>";

    };

    //ends elements
    string += "</ul></div>";
    destEl.innerHTML += string;

    return;

}

//searhces for images and webs
//e -> event
function triggerSearch(e) {

    e.preventDefault();

    var searchInput = document.getElementById('searchString').value;
    var destElImg = document.getElementById('resultImages');
    var destElWebs = document.getElementById('resultWebs');

    triggerSearchImg(searchInput, destElImg);
    triggerSearchWebs(searchInput, destElWebs, 1);

    return;

}
