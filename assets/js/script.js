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
    let locations = [
        {name:'Тест1',type:'Гору',lat: 48.0196, lng: 66.9237},
        {name:'Тест2',type:'Реку',lat: 49.0196, lng: 67.9237}
    ]; 

    let mapNotification = document.getElementById('map-notification');
    let mapNotificationBtn = document.getElementById('map-notification-button');
    let mapNotificationText = document.getElementById('map-notification-text');
    let mapTitleText = document.getElementById('map-title-text');
    
    for(let location of locations){
        let marker = new google.maps.Marker({position: location, map: map});
        mapNotificationText.innerText = `Это ${location['name']}`;
        mapNotificationBtn.addEventListener('click',function(){
            mapNotification.style.display = 'none'
        })
        mapTitleText.innerText = `Найдите на карте ${location['type']}`
        marker.addListener('click', function() {
            let countDown = 5; 
            mapNotification.style.display = 'block';
            console.log(`${location['name']}`);
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
}
