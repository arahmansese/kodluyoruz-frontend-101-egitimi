function inputName(){
    var name = prompt('Lutfen adinizi griniz.','Abdurrahman SESE')
    document.getElementById("myName").textContent = name;

    
}
    

function showTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var days = now.getDay();

    var hoursInput = hours < 10 ? "0" + hours : hours;
    var minutesInput = minutes < 10 ? "0" + minutes : minutes;
    var secondsInput = seconds < 10 ? "0" + seconds : seconds;
    
    switch(days){
        case 1:
            days = "Pazartesi";
            break;
        case 2:
            days = "Sali";
            break;
        case 3:
            days = "Carsamba";
            break;
        case 4:
            days = "Persembe";
            break;
        case 5:
            days = "Cuma";
            break;
        case 6:
            days = "Cumartesi";
            break;
        case 7:
            days = "Pazar";
            break;
    }

    var clockInput = hoursInput + ":" + minutesInput + ":" + secondsInput + ' ' + days;

    document.getElementById("myClock").textContent = clockInput;
}

setInterval(showTime, 1000); // Her saniye guncelleSaat fonksiyonunu çağır


