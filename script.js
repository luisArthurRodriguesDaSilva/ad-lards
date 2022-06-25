import tabelinha from './relat.js';
const main = document.querySelector('main');
const totalPrice = document.querySelector('#total-price');

const replaceLast = (str,char,newChar) => {
  let reverted = str.split("").reverse().join("");
  let place = reverted.indexOf(char);
  let arraio = reverted.split("");
  arraio[place] = newChar;
  arraio = arraio.reverse().join("");
  return arraio
}

const createProduct = () => {
  for(let i = 0; i < tabelinha.adressesOfImg.length; i+=1){
    main.innerHTML += 
    `
  <section>
    <div class="cima">
        <img src="${tabelinha.adressesOfImg[i]}" alt="imagem do produto ${tabelinha.names[i]}" id="produto-${i}">
        <p id="price-of${i}">R$${tabelinha.prices[i].replace('.',',')}</p>
        <div class="accum-price" id="ac-price-of-${i}">R$0,00</div>
    </div>
    <div class="baixo">
      <div class="masomeno">
        <button class="btn btn-sm rm-card" id="${i}">
        -
        </button>
        <div class="unitis" id="unitys-of-${i}" >0</div>
        <button class="btn btn-sm add-card" id="${i}">
        +
        </button>
      </div>
    </div>
  </section>
`;
  }
}
const productsOfActCard = (wc) => {
  try{
  const lisOfCard = document.querySelectorAll('#carrinho-list li a')
  return [...lisOfCard].map(e => {
    let w = e.innerText;
    let firstPart = w.slice(0,w.indexOf(' '));
    let lastPart = w.slice(w.indexOf(' '),w.length);
    firstPart = firstPart.replace(/[0-9]/g,'');
    let juntada = firstPart + lastPart;
    return(juntada.slice(1,juntada.length));
  })
}
  catch(e){
    return [...wc];
  }
}

const changeUnity = (id,v) => {
  const span = document.querySelector(`#spanOf${id}`);
  span.innerHTML = `${parseInt(span.innerHTML)+v}`;  
  span.innerHTML += ' ';
}

const addRmProduct = (e) => {
  const listCard = document.querySelector('#carrinho-list');

  const lasClasses = [...e.target.classList];
  const ID = e.target.id;
  const produto = tabelinha.names[ID];
  const dive = document.querySelector(`#unitys-of-${ID}`);
  const span = document.querySelector(`#spanOf${ID}`);
  const params = [ID,produto,listCard,dive,span];

  lasClasses.some(el => el == 'add-card') ? addProduct(...params) : rmProduct(...params);
  changeAccPrice(ID);
  changeMessageOfCardBuy()
}

const addProduct = (ID,produto,listCard,dive,span) => {

  dive.innerHTML = `${parseInt(dive.innerHTML)+1}`;

  if(productsOfActCard(produto).some(el => el == produto)){
    changeUnity(ID,1);
  }
  else{
    const li = document.createElement("li");
    li.innerHTML = `<a class="dropdown-item prod" href="#produto-${ID}"><span id="spanOf${ID}">1 </span>${produto}</a>`;
    listCard.appendChild(li);
  }
}

const rmProduct = (ID,produto,listCard,dive,span) => {

  try{
    if(parseInt(span.innerHTML) > 1){
    changeUnity(ID,-1);
    }
    else{
      span.parentNode.remove();
    }
    dive.innerHTML = `${parseInt(dive.innerHTML)-1}`;
  } catch(e){console.log('ja deu cr  ' + e)}

}

const changeMessageOfCardBuy = () => {
  const produtosComprados = document.querySelectorAll('#carrinho-list .prod');
  let text = 'Quero comprar ';
  for(let i of produtosComprados){
    text += `  ${i.innerText},`;
  }

  let convertedText = text.replaceAll(' ','%20');
  convertedText = convertedText.slice(0,convertedText.length -1);
  convertedText = replaceLast(convertedText,',','%20e%20');
  document.querySelector('#comprar-carrinho').href = `https://wa.me/5522998947260?text=${convertedText}`
  changeTotalPrice();
}

const changeTotalPrice = () => {
  const accumsPrices = document.querySelectorAll('.accum-price');
  let total = 0;
  let value = 0;

  accumsPrices.forEach(e => {
    value = parseFloat(e.innerHTML.replace('R$','').replace(',','.'));
    total+=value;
  })

  totalPrice.innerHTML = `R$${total.toFixed(2)}`.replace('.',',');
}

const changeAccPrice = (ID) => {
  const qnt = parseInt(document.querySelector(`#unitys-of-${ID}`).innerHTML);
  const price = tabelinha.prices[ID];
  const acc = document.querySelector(`#ac-price-of-${ID}`);
  acc.innerHTML = `R$${(qnt* parseFloat(price)).toFixed(2)}`.replace('.',',');
}

createProduct();

[...document.querySelectorAll('.add-card'),...document.querySelectorAll('.rm-card')].forEach( e =>  e.addEventListener('click', addRmProduct));