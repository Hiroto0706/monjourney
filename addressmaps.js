function createMap(result, status) {
	if(status === google.maps.GeocoderStatus.OK){
		var myPosition = result[0].geometry.location;
		var myOptions = {
			zoom : 14,
			center : myPosition,
			mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			
			var myMap = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
		}
	}
	
	function drawMap(myAddress){
		var geocoder = new google.maps.Geocoder();
		
		geocoder.geocode({
			address : myAddress
		},createMap);
	}