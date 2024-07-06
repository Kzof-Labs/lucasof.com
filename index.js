function updateDatetime() {
    var pDatetime = document.getElementById("top-datetime");
    var date = new Date();
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var period = "AM";
    
    if (hours >= 12) {
        period = "PM";
        hours = hours % 12;
    }
    if (hours === 0) {
        hours = 12; 
    }
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
    var datetime = hours + ":" + minutes + " " + period;
    
    pDatetime.textContent = datetime;
}

var backgroundImages = [
    'url(assets/img/backgrounds/cyberpunk.gif)',
    'url(assets/img/backgrounds/cyberpunk2.gif)',
    'url(assets/img/backgrounds/orange.gif)',
    'url(assets/img/backgrounds/space.gif)',
    'url(assets/img/backgrounds/nature-pixel-art.gif)'
];

function getRandomBackgroundImage() {
    var randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
}

function applyRandomBackground() {
    var body = document.body;
    body.style.backgroundImage = getRandomBackgroundImage();
}

document.addEventListener("DOMContentLoaded", function() {
    updateDatetime();
    applyRandomBackground();
    setInterval(updateDatetime, 60000);
});
