const aviso = document.querySelector('#aviso');
const bannier = document.querySelector('#bannier');
const bannierContainer = document.querySelector('#bannierer-container');
const cellphone = (window.matchMedia("(orientation: portrait)").matches) 
const decrecimo =  (cellphone) ? 50*3 : 75*3;
const h = screen.height*0.8 -document.querySelector('header').clientHeight;


bannier.style.height =  h + 'px';

const sumico = (e) => {
    let actLocal = window.scrollY;
    let diff = (h - actLocal).toFixed(2);
   console.log('diff' + diff);
    if(diff > 0){
      bannier.style.height =  diff + 'px';
      let opc = ((diff / h) ** 5).toFixed(2);
      console.log("opc " + opc);
      bannier.style.opacity = opc;
      //aviso.style.opacity = opc;    //made by my father when
    }
    console.log("heigth " + bannierContainer.clientHeight);
}

const sumi = setInterval(
    sumico, 10
  );


window.addEventListener('scroll',(e) => {
  let actLocal = window.scrollY;
  let diff = (h - actLocal).toFixed(2);
  if(diff <= 0){
    (bannierContainer.style.display != 'none') ? bannierContainer.style.display = 'none' : console.log('none');
  clearInterval(sumi);
  console.log('clear')
  
  ;}
  }
);
