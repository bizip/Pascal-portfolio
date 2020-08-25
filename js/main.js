// Google map
var initMap = () => {
    var options = {
        zoom: 15,
        center: {
            // lat: -1.935114,
            // lng: 30.082111
            lat: -2.00391,
            lng: 30.14696

        }

    }
    var map = new google.maps.Map(document.getElementById('map'), options);
    var marker = new google.maps.Marker({
        position: {
            lat: -2.00391,
            lng: 30.14696

        },
        map: map
    });
    var infoWindow = new google.maps.InfoWindow({
        content: "<h2>Eng. Bizimungu Pascal<sup>'s</sup> Office</h2>"
    });
    marker.addListener('mouseover', () => {
        infoWindow.open(map, marker);
    })
}