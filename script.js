document.addEventListener("mousemove",f);
const corpo = document.querySelector("body"); 
var f=(e)=>{
        /*const corpo=document.querySelector("#body"); */
        var x = e.clientX;
        var y = e.clientY;
        console.log("-------------------")
        console.log(x);
        console.log(y);
        console.log("__")
        fundo = ("linear-gradient(180deg, rgba(255,255,255,0.49343487394957986) 77%, rgba(0,255,252,0.8715861344537815) 100%);");
        console.log(fundo)
        console.log(corpo.style['background']);
        corpo.style["background"] = fundo;
        console.log("___")
        console.log(fundo)
        console.log(corpo.style.background);
        console.log("-------------------")
        }