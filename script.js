const bode = document.querySelector("#body");
bode.addEventListener('mousemove', e => {
        var x = e.clientX;
        var y = e.clientY;
        console.log(x + " e " + y );
        gradient="linear-gradient(" + ((Math.atan(x-(screen.width/2),y-(screen.height/2)))*360)/3.14+ "deg, rgba(255,255,255,0.19343487394957986) 25%, rgba(0,255,252,0.8715861344537815) 100%)";
        bode.style.backgroundImage= gradient;
        bode.style.MozBackground = gradient;
        bode.style.WebkitBackground = gradient;
        bode.style.background = gradient;
});