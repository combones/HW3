getAPI = function getAPI() {
    return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
        return response.json();
    }).catch(function (e) {
		window.alert("Failed to pull data.");
        return console.err('fail');
    }).then(function (response) {
        var result = "";
        for (var i = 0; i < response.length; i++) {
            result += "<b>Name : </b>" + response[i].name + 
			"<br> <b>Tagline : </b>" + response[i].tagline + 
			"<br> <b>Food pairing : </b>" + response[i].food_pairing + 
			"<br> <b>Yeast : </b>" + response[i].ingredients.yeast + 
			"<br> <b>First Brewed : </b>" + response[i].first_brewed +
			"<br> <b>Description : </b>" + response[i].description + "<br><hr>";
        }
        document.getElementById('result').innerHTML = result;
    });
};

function getAPIByName(beer,food) {
	var apiURL="";
	if(beer == "" & food ==""){
		window.alert("Please insert Beer's name or food.");
        return false;
	}
	if(beer == "" & food !="")
		{ apiURL = 'https://api.punkapi.com/v2/beers/?food=' + food }
	else
		{ apiURL = 'https://api.punkapi.com/v2/beers/?beer_name=' + beer + '&?yeast=' + food }
	
	return fetch(apiURL).then(function (response) {
        return response.json();
    }).catch(function (e) {
		window.alert("Failed to pull data.");
        return console.err('fail');
    }).then(function (response) {
        var result = "";
        for (var i = 0; i < response.length; i++) {
            result += "<b>Name : </b>" + response[i].name + 
			"<br> <b>Tagline : </b>" + response[i].tagline + 
			"<br> <b>Food pairing : </b>" + response[i].food_pairing + 
			"<br> <b>Yeast : </b>" + response[i].ingredients.yeast + 
			"<br> <b>First Brewed : </b>" + response[i].first_brewed +
			"<br> <b>Description : </b>" + response[i].description + "<br><hr>";
        }
		if(response == "")
			{document.getElementById('result').innerHTML = "Sorry, We don't have this one.";}
		else
			document.getElementById('result').innerHTML = result;
    });
};


