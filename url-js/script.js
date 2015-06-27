$(document).ready(function() {
    var url1 = $('#url1').text();

    urlJson = transformUrlToJSON(url1);

    console.log(urlJson);
    addDivWithObjectContent(urlJson);
});

function transformUrlToJSON(url) {
    queryString = getQueryString(url);
    queryStringJson = getJsonByQueryString(queryString);

    return queryStringJson;
}

function getQueryString(url) {
    return queryString = url.split('?')[1];
}

function getJsonByQueryString(queryString) {
    queryString = '{"' + queryString.replace(/=/g,'":"').replace(/&/g,'","') + '"}';
    queryStringJson = $.parseJSON(queryString);

    return queryStringJson;
}

function addDivWithObjectContent(queryStringJson) {
    var ul = $('<ul></ul');
        li = $('<li></li>');

    $.each(queryStringJson, function(key, value) {
        var newLi = li.clone();

        newLi.text(key + ': ' + value);
        ul.append(newLi)
    });

    $('body').append(ul);
}