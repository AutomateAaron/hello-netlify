jQuery(function ($) {

    'use strict';




    // -------------------------------------------------------------
    // Google Map
    // -------------------------------------------------------------

    (function () {
        var myLatlng = new google.maps.LatLng(40.3573, -74.6672);

            var styles = [
                {
                    featureType: "landscape",
                    stylers: [
                        { color: '#f7f7f7' }
                    ]
                },{
                    featureType: "natural",
                    stylers: [
                        { hue: '#4d00bb'}
                    ]
                },{
                    featureType: "road",
                    stylers: [
                        { hue: '#fff' },
                        { saturation: -70 }
                    ]
                },{
                    featureType: "building",
                    elementType: "labels",
                    stylers: [
                        { hue: '' }
                    ]
                },{
                    featureType: "poi", //points of interest
                    stylers: [
                        { hue: '' }
                    ]
                }
            ];

            var mapOptions = {
                zoom: 14,
                scrollwheel: false,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: false,
                styles: styles
            };
            var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.DROP,
                title: 'Hello World!'
            });

            var contentString = 'Princeton NJ';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

    }());


});