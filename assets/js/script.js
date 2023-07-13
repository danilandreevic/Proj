function initMap() {
    let kazakhstanBounds = {
        north: 58.4422,
        south: 40.5695,
        west: 45.4917,
        east: 91.3156
    };

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: {lat: 48.0196, lng: 66.9237},
        restriction: {
            latLngBounds: kazakhstanBounds,
            strictBounds: true,
        },
    });
    let location = {lat: 48.0196, lng: 66.9237}; 
    let marker = new google.maps.Marker({position: location, map: map});

    let mapNotification = document.getElementById('map-notification');
    let mapNotificationBtn = document.getElementById('map-notification-button');
    
    mapNotificationBtn.addEventListener('click',function(){
        mapNotification.style.display = 'none'
    })
    marker.addListener('click', function() {
        let countDown = 5; 
        mapNotification.style.display = 'block';
    

        let updateCountDown = function() {
            mapNotificationBtn.innerText = `Ок (${countDown})`;
            countDown--; 
            if (countDown < 0) {
                clearInterval(timer);
                mapNotification.style.display = 'none';    
            }
        }
        updateCountDown();
        let timer = setInterval(updateCountDown, 1000);
    });
    
    
}



