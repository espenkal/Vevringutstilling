function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(61.490590, 5.393579),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.roadmap
    }
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    }