/*
 *	map.js
 *
 */


$(document).ready(function () {
	
	var Backbone = require("backbone");
	var MapView = Backbone.View.extend({

		el: $(".map"),

		initialize: function () {
			//_.bindAll(this);
			console.log("hi there");
			/*
			var gmap = this.gmap = new google.maps.Map(this.el[0], {
				zoom: 2,
				center: new google.maps.LatLng(37.0625, -100.677068),
				backgroundColor : "#000",
				mapTypeId: google.maps.MapTypeId.SATELLITE
			});
			google.maps.event.addListener(gmap, "tilesloaded", this.loaded);
			gmap.init();
			*/
		},

		tilesloaded: function () {
			setTimeout(function () {
				console.log(this);
			}, 200);
		},

	});
	
	console.log($);
	window.app = new MapView();
});

/*
$(document).ready(function () {
	map = $(".map");

	map.init = function () {
		map.map = new google.maps.Map(map[0], {
			zoom: 2,
			center: new google.maps.LatLng(37.0625, -100.677068),
			backgroundColor : "#000",
			mapTypeId: google.maps.MapTypeId.SATELLITE
		});
		google.maps.event.addListener(map.map, "tilesloaded", map.loaded);
	}

	map.loaded = function () {
		setTimeout("map.config()", 200);    
	}

	map.config = function () {
		var i = 0;
		map.children().children().each(function() {
			if(i > 0) map.controls = map.controls.add($(this));
			i++;
		});
		map.controls.css("display", "none");
		google.maps.event.clearListeners(map.map, "tilesloaded");
		objcEvent.dispatch("mapReady");
	}

	map.setLocation = function (lat, lng) {
		var loc = new google.maps.LatLng(lat, lng);
		google.maps.event.addListener(map.map, "tilesloaded", map.tilesloaded);
		map.map.setCenter(loc);
		map.map.setZoom(11);
	}

	map.tilesloaded = function () {
		objcEvent.dispatch("tilesloaded");
	}

	map.init();
	objcEvent.dispatch("ready");
});
*/
