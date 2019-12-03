window.onload = function(){
    //Check if geolocation is enabled
    if(navigator.geolocation){
        //if geolocation is enabled, get the users lat, long, and update the map
        navigator.geolocation.getCurrentPosition(function (p){
            var position = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
            var title = "That's You!";
            var options = {
                center: position,
                zoom: 15
            };

            var mapdiv = document.getElementById("map");
            var map = new google.maps.Map(mapdiv, options);
            var marker = new google.maps.Marker({position: position, map: map, title: title});
        }, function(){
            //error function:
            alert("Didn't work dude...");
        });
    }
}