$(document).ready(function () {
    console.log("WORKS");

    // food name will reture nutrients 
    // get the food name
    // send request to server
    // display the results
    function displaySearchResult(search) {
        window.location.replace("?=" + food + "");
    }

    $('#submit').on('click', function () {
        // get text from thesearch box

        var searchText = $('#searchText').text().trim();

        displaySearchResult(searchText);
    });

    var nutraList;
    var foodName;

    $("#buttonId").on("click", function (e) {
        e.preventDefault();
        var searchInput = $("#search-input").val().trim();
        console.log(searchInput);
        $.ajax({
            "method": "GET",
            "url": "/api/foodSearch/" + searchInput
        }).done(function (data) {
            nutraList = data;
            foodName = searchInput
            console.log(data);
            var jqString = "#myTd";
            var jqStringCurr = "";

            for (var j = 0; j < 6; j++) {
                jqStringCurr = jqString + (j + 1).toString();
                $(jqStringCurr).html(data[j].formattedName);
            }


        });
    });


    $("#buttonIdPost").on("click", function (e) {
        e.preventDefault();
        if (foodName && nutraList.length === 6) {
            $.post("/savedfood", { nutraList: nutraList, foodName: foodName }, function (data) {
            })
        }
    });
});
