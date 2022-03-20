$('.search-input #find').on("click", function() {
	
	$("main .container").empty(); 
	var $search = $(".search-input input").val();
	var flickr = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + $search + '&format=json&jsoncallback=?'
	
	$.getJSON(flickr, function (pics) { 
	
		pics.items.forEach(function (photo) { 

		// create a new jQuery element to hold the image
		var $img = $("<img>"); 

		// set the attribute to the url  contained in the response 
		$img.attr("src", photo.media.m); 

		// attach the img tag to a container in the main using .append
		$("main .container").append($img);

		});
		
	console.log("test");

	}); 
});