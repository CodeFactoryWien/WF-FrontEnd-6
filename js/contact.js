
function initContact() {
	renderContact();
}

function renderContact() {
	
}





/*-- LOCATION MAP --*/
<link rel='stylesheet' href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css'></link>
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js'></script>

/*-- FONT AWESOME --*/
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


<article>
	<div class="contact table">
		<div class="tr">
			<div class="td"><p><i class="fas fa-map-marker-alt"></i></div>
			<div class="td"><p><b>Sun-Fun</b><br>Musterstaße 3<br>1010 Wien</p></div>
		</div>
		
		<div class="tr">
			<div class="td"><p><i class="fas fa-phone"></i></div>
			<div class="td"><p>+43 (1) 23 45 678</p></div>
		</div>
		
		<div class="tr">
			<div class="td"><p><i class="fas fa-envelope"></i></div>
			<div class="td"><a href="office@sun-fun.com" style="color: blue">office@sun-fun.com</a></div>
		</div>
	</div>
	
	<div class="location shadow">
		<div id="map"></div>
	</div>
	
	<div class="center">
		<a href="https://www.facebook.com" class="fa fa-facebook opacity"></a>
		<a href="https://twitter.com/" class="fa fa-twitter opacity"></a>
		<a href="https://myaccount.google.com" class="fa fa-google opacity"></a>
		<a href="https://at.linkedin.com/" class="fa fa-linkedin opacity"></a>
		<a href="https://www.instagram.com/" class="fa fa-instagram opacity"></a>
	</div>
</article>

/*-- LOCATION MAP --*/
mapboxgl.accessToken = 'pk.eyJ1IjoidG9tNDcxMSIsImEiOiJjanV1bzNkbmUwa3V6NGVueXg4eWd4MXJrIn0.kFzTfsVyjtDGA6L_gNU1LQ';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [16.3712936, 48.2097532],
	zoom: 13
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
	
// TARGET-IMAGE	
map.on('load', function() {
	map.loadImage('img/symbol/target.png', function(error, image) {
		if (error) { throw error; }
				
		map.addImage('target', image);
		map.addLayer({
			"id": "points",
			"type": "symbol",
			"source": {
				"type": "geojson",
				"data": {
					"type": "FeatureCollection",
					"features": [{
						"type": "Feature",
						"geometry": {
							"type": "Point",
							"coordinates": [16.3712936, 48.2097532]
						}
					}]
				}
			},
			"layout": {
				"icon-image": "target",
				"icon-size": 0.6
			}
		});
	});
});	
