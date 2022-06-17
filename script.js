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
        <button class="btn btn-sm add-card" id="${i}">
        carrinho
        </button>
        <a href="https://wa.me/5522998947260?text=${wpptext}" target="_blank" class="buy-btn btn btn-sm" >
           comprar <img id="wpp-logo" src="imagens/b24b5255a15e38ebe07b12094abdca65.png">
        </a>
    </div>
  </section>
`;
  }
}

const ActCard = (wc) => {
  try{
  const lisOfCard = document.querySelectorAll('#carrinho-list li a')
  return [...lisOfCard].map(e => {
    let parada = e.innerText.replace(/[0-9]/g,'');
    return(parada.slice(1,parada.length));
  })
}
  catch(e){
    console.log(e);
    return [...wc];
  }
}

const upUnity = (id) => {
  const span = document.querySelector(`#spanOf${id}`);
  span.innerHTML = `${parseInt(span.innerHTML)+1}`;  
  span.innerHTML += ' ';
}

const addProduct = (e) => {

  const listCard = document.querySelector('#carrinho-list');
  const ID = e.target.id;
  let produto = tabelinha.names[ID];

  if(verifyExistence(ActCard(produto),produto)){
    upUnity(e.target.id);
  }
  else{
    const li = document.createElement("li");
    li.innerHTML = `<a class="dropdown-item prod" href="#produto-${ID}"><span id="spanOf${ID}">1 </span>${produto}</a>`;
    listCard.appendChild(li);
  }
  changeMessageOfCardBuy();
}

const changeMessageOfCardBuy = () => {
  const produtosComprados = document.querySelectorAll('#carrinho-list .prod');
  let text = 'Quero comprar';
  for(let i of produtosComprados){
    text += `  ${i.innerText},`;
  }
  let convertedText = text.replaceAll(' ','%20');
  document.querySelector('#comprar-carrinho').href = `https://wa.me/5522998947260?text=${convertedText.slice(0,convertedText.length - 1)}`
}


createProduct();
for (let i of document.querySelectorAll('.add-card')){i.addEventListener('click', addProduct);}