var button1 = document.getElementById('firsth'),
    button2 = document.getElementById('second'),
    button3 = document.getElementById('third'),
    button4 = document.getElementById('four'),
    countinput = document.getElementById("countee");




var seconds = 1500,
    countdiv = document.getElementById('countdown'),


    secondpass,
    countdown = setInterval(function() {
        "use strict";

        secondpass();


    }, 1000);



button1.addEventListener("click", function() {
    seconds = 300;

});

button2.addEventListener("click", function() {
    seconds = 1500;

});

button3.addEventListener("click", function() {
    seconds = 2100;

});

button4.addEventListener("click", function() {
    seconds = 2400;

});




function secondpass() {
    "use strict";
    var minuts = Math.floor(seconds / 60),
        remSeconds = seconds % 60;
    if (seconds < 10) {
        remSeconds = "0" + remSeconds;
    }

    countdiv.innerHTML = minuts + ":" + remSeconds;
    if (seconds >= 0) {

        seconds--;

    } else {
        sound.play();
        seconds = 300;
        alert("The Time Is Out Now You Can Take A Break heb heb yaaaaa heb heb yaaaaaa");

        secondpass();
        // clearInterval(countdown);


    }
}


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = "hahahaha.mpeg";
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}
sound();