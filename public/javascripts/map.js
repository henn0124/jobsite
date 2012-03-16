/*
 *	map.js
 *
 */

var _ = require("underscore");
var Backbone = require("backbone");

var MapView = Backbone.View.extend({

	el: ".map",

	initialize: function () {
		var gmap = this.gmap = new google.maps.Map(this.el, {
			zoom: 5,
			center: new google.maps.LatLng(37.0625, -100.677068),
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			backgroundColor: "#000",
		});
		google.maps.event.addListener(gmap, "tilesloaded", this.loaded);
	},

	loaded: function () {
		console.log("map loaded");
	},

});


$(document).ready(function () {	
	window.app = new MapView();
});
