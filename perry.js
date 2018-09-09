function locateCurrentLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(){
        console.log(position)
        $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
          console.log(data);
        }
}