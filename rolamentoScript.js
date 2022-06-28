const aviso = document.querySelector('#aviso');
const bannier = document.querySelector('#bannier');
const bannierContainer = document.querySelector('#bannierer-container');

const sumico = (e) => {
  let h = screen.height;
  let actLocal = window.scrollY;
  let ratio = actLocal/h;
  let opc = 1-ratio;
  bannierContainer.style.opacity = opc;
  if(opc < 0.1){
  bannier.style.display = 'none';
  aviso.style.display = 'none';
  }
}



window.addEventListener('scroll',sumico);