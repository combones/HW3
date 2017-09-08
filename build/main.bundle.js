'use strict';

getBeersAPI = function getBeersAPI() {
				return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
								return response.json();
				}).catch(function (e) {
								return console.err('fail');
				}).then(function (response) {
								var result = "";
								for (var i = 0; i < response.length; i++) {
												result += "<b>Name : </b>" + response[i].name + "<br> <b>Tagline : </b>" + response[i].tagline + "<br> <b>PH : </b>" + response[i].ph + "<br> <b>Yeast : </b>" + response[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + response[i].first_brewed + "<br> <b>Description : </b>" + response[i].description + "<br>" + "<image src =" + response[i].image_url + "/><hr>";
								}
								document.getElementById('result').innerHTML = result;
				});
};

function getBeerAPIByName(name, yeast) {
				var apiURL = "";
				if (name == "" & yeast != "") {
								apiURL = 'https://api.punkapi.com/v2/beers/?yeast=' + yeast;
				} else {
								apiURL = 'https://api.punkapi.com/v2/beers/?beer_name=' + name + '&?yeast=' + yeast;
				}

				return fetch(apiURL).then(function (response) {
								return response.json();
				}).catch(function (e) {
								return console.err('fail');
				}).then(function (response) {
								var result = "";
								for (var i = 0; i < response.length; i++) {
												result += "<b>Name : </b>" + response[i].name + "<br> <b>Tagline : </b>" + response[i].tagline + "<br> <b>PH : </b>" + response[i].ph + "<br> <b>Yeast : </b>" + response[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + response[i].first_brewed + "<br> <b>Description : </b>" + response[i].description + "<br>" + "<image src =" + response[i].image_url + "/><hr>";
								}
								if (name == "" & yeast == "" || response == "") {
												document.getElementById('result').innerHTML = "Not result";
								} else document.getElementById('result').innerHTML = result;
				});
};
