const bode = document.querySelector("#body");
bode.addEventListener('mousemove', e => {
        var x = e.clientX;
        var y = e.clientY;
        console.log(x + " e " + y );
        var distancia =  Math.sqrt(Math.pow(y-(screen.height/2),2) + Math.pow(x-(screen.width/2),2))
        const distancia_maxima = Math.sqrt(Math.pow(screen.height,2)+Math.pow(screen.width,2))
        gradient="linear-gradient(" + ((((Math.atan2(y-(screen.height/2),x-(screen.width/2))))*360/6.28)+270)+ "deg, rgba(255,255,255,0.10343487394957986)" + (distancia_maxima/distancia+10) + "%, rgba(0,255,252,0.7715861344537815) 100%)";
        bode.style.backgroundImage= gradient;
        bode.style.MozBackground = gradient;
        bode.style.WebkitBackground = gradient;
        bode.style.background = gradient;
});