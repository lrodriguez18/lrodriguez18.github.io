//Appends results to the page.
function showResult(result1, result2, result3)
    {
        //append the task to the TODO list
        $("#results").append("<tr><td>" + result1 + "</td><td>" + result2 + "</td><td><button id = 'myButton'><a href='" + result3 
        + "'class ='myButton'>Website</a></button></td></tr>");
    }

function showHeaders()
    {
        $("thead").append("<th>Name</th>"+
        "<th>Category</th>"+
        "<th>Learn More</th>");
    }


//Gets the data from JSON of loadResults
function logResults(response)
    {
        console.log("Show all the results: " + response);
        for(var i in response["data"])
        {
            var charity = response["data"][i];
            showResult(charity["charityName"],charity["category"],charity["url"]);
        }
        showHeaders();
    }

//Makes ajax request with user iput.
function loadResults(search)
{
    console.log("Load the results via ajax");

    //make the ajax request
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://data.orghunter.com/v1/charitysearch?user_key=1b7a21f75daf42af87666ef713510b26&zipCode=" + search, 
        dataType: "json", // the data received
        success: logResults
    });

}

//Gets and validates user input
function submitSearch(){
    $("#search-zipcode").click(function(){
        $("tbody").empty();
        $("thead").empty();
        var search = $("#zip-input").val();
        if (isNaN(search))
        {
            alert("Please enter number values!");
        }
        if(search.length != 5)
        {
            alert("Please enter a five-digit zipcode!");
        }
        else{
            loadResults(search);
        }		
    });
}

$(document).ready(submitSearch);
