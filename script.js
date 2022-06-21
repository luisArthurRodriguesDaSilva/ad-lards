import tabelinha from './relat.js';
const main = document.querySelector('main');
const listCard = document.querySelector('#carrinho-list');

const verifyExistence = (arraio,coisa) => {
  for(let i of arraio){
    if(i == coisa){
      return true;
    }  
  }
  return false; 
}

const createProduct = () => {
  for(let i = 0; i < tabelinha.adressesOfImg.length; i+=1){

    let text = `olá, desejo comprar o produto ${tabelinha.names[i]}`;
    let wpptext = text.replaceAll(' ','%20');

    main.innerHTML += 
    `
  <section>
    <div class="cima">
        <img src="${tabelinha.adressesOfImg[i]}" alt="imagem do produto ${tabelinha.names[i]}" id="produto-${i}">
    </div>
    <div class="baixo">
      <div>
        <button class="btn btn-sm add-card" id="${i}">
        +
        </button>
        <div class="unitis" id="unitys-of-${i}" >0</div>
        <button class="btn btn-sm rm-card" id="${i}">
        -
        </button>
      </div>
    </div>
  </section>
`;
  }
}

const ActCard = (wc) => {
  try{
  const lisOfCard = document.querySelectorAll('#carrinho-list li a')
  return [...lisOfCard].map(e => {
    let w = e.innerText;
    let firstPart = w.slice(0,5);
    let lastPart = w.slice(5,w.length);
    firstPart = firstPart.replace(/[0-9]/g,'');
    let juntada = firstPart + lastPart;
    // let parada = (e.innerText.replace(/[0-9]/g,'').slice(0,5) + e.innerText.slice(6,e.innerText.length));
    console.log(juntada)
    return(juntada.slice(1,juntada.length));
  })
}
  catch(e){
    console.log(e);
    return [...wc];
  }
}

const changeUnity = (id,v) => {
  const span = document.querySelector(`#spanOf${id}`);
  span.innerHTML = `${parseInt(span.innerHTML)+v}`;  
  span.innerHTML += ' ';
}

const addProduct = (e) => {

  const listCard = document.querySelector('#carrinho-list');
  const ID = e.target.id;
  let produto = tabelinha.names[ID];

  
  const dive = document.querySelector(`#unitys-of-${ID}`); 
  dive.innerHTML = `${parseInt(dive.innerHTML)+1}`;
  if(verifyExistence(ActCard(produto),produto)){
    changeUnity(e.target.id,1);
  }
  else{
    const li = document.createElement("li");
    li.innerHTML = `<a class="dropdown-item prod" href="#produto-${ID}"><span id="spanOf${ID}">1 </span>${produto}</a>`;
    listCard.appendChild(li);
  }
  changeMessageOfCardBuy();
}

const rmProduct = (e) => {

  const listCard = document.querySelector('#carrinho-list');
  const ID = e.target.id;
  const span = document.querySelector(`#spanOf${ID}`);
  let produto = tabelinha.names[ID];
  try{
    if(parseInt(span.innerHTML) > 1){
    changeUnity(e.target.id,-1);
    }
    else{
      span.parentNode.remove();
    }
    changeMessageOfCardBuy();
    const dive = document.querySelector(`#unitys-of-${ID}`); 
    dive.innerHTML = `${parseInt(dive.innerHTML)-1}`;
  }catch(e){console.log('ja deu cr  ' + e)}

}

const changeMessageOfCardBuy = () => {
  const produtosComprados = document.querySelectorAll('#carrinho-list .prod');
  let text = 'Quero comprar ';
  for(let i of produtosComprados){
    text += `  ${i.innerText},`;
  }
  let convertedText = text.replaceAll(' ','%20');
  document.querySelector('#comprar-carrinho').href = `https://wa.me/5522998947260?text=${convertedText.slice(0,convertedText.length - 1)}`
}


createProduct();
for (let i of document.querySelectorAll('.add-card')){i.addEventListener('click', addProduct);}
for (let i of document.querySelectorAll('.rm-card')){i.addEventListener('click', rmProduct);}