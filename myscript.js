$(document).ready(function(){

   $("#myform").submit(function(){
	   
	   //Empties previous results from page.
	   $("#result").empty();

	  // Gets the user input.
   	  var search = $("#books").val();
	  
	  //Alerts if there is an error.
   	  if(search === "")
   	  {
   	  	alert("Please enter something in the field");
   	  }
	   
	  //Get data if there is not an error.
   	  else{		
   	  var url = "";
   	  var img = "";
      var title = "";
      var author = "";

	//Ajax call to Google Books API
   	  $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){

		  //Appends title, author, and image of book to the page.
          for(i=0;i<response.items.length;i++)
          {
           title = $('<h5 class="center-align white-text">' + response.items[i].volumeInfo.title + '</h5>');  
			  
           author = $('<h5 class="center-align white-text"> By:' + response.items[i].volumeInfo.authors + '</h5>');
			  
           img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning">Read More</button></a>'); 
			  
           url = response.items[i].volumeInfo.imageLinks.thumbnail;
			  
           img.attr('src', url);
			  
           title.appendTo('#result');
           author.appendTo('#result');
           img.appendTo('#result');
          }
   	  });
      
      }
      return false;
   });

});
