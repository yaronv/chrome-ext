;(function() {
	$(document).ready(function(){

		var searchInput = $("#search");

		$("#searchButton").on("click", function(e) {
			searchClick(e);
		});

		searchInput.keypress(function(e){
		    if (e.which == 13){
			    searchClick(e);
		    }
		});

		searchInput.focus();

	});

	function searchClick(e, val) {
	   val = val || $("#search").val().trim();
	   event.preventDefault();
	   if(val == '') {
  		$("#search").addClass("errorInput");
  		setTimeout(function() {
  			 $("#search").removeClass("errorInput");
  		}, 200)
  	   	return;
  	 }

	   var url = "https://www.google.com/search?q="+val.split(' ').join('+');
	   chrome.tabs.create({
	    	url: url,
	    }, function(tab) {
	  	//chrome.tabs.sendMessage(tab.id, {search: $("#search").val().trim()}, function(response) {
		  //});
	    });
	}

}());

