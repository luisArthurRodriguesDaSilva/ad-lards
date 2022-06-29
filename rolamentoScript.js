const aviso = document.querySelector('#aviso');
const bannier = document.querySelector('#bannier');
const bannierContainer = document.querySelector('#bannierer-container');

const acrecimo = (window.matchMedia("(orientation: portrait)").matches) ? 200 : -30;
const h = screen.height + acrecimo ;

const sumico = (e) => {
    let actLocal = window.scrollY;
    let diff = (h - actLocal).toFixed(2);
   console.log('diff' + diff);
    if(diff > 0){
      bannier.style.height =  diff + 'px';
      let opc = ((diff / h) ** 5).toFixed(2);
      console.log("opc " + opc);
      bannier.style.opacity = opc;
      aviso.style.opacity = opc;
    }
    console.log("heigth " + bannierContainer.clientHeight);
}

const sumi = setInterval(sumico, 50);


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
