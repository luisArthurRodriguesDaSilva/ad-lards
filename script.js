import tabelinha from './relat.js';
const main = document.querySelector('main');

const createProduct = () => {
  for(let i = 0; i < tabelinha.adressesOfImg.length; i+=1){

    let text = `olá, desejo comprar o produto ${tabelinha.names[i]}`;
    let wpptext = text.replaceAll(' ','%20');

    main.innerHTML += 
    `
    <section>
    <div class="cima">
        <img src="${tabelinha.adressesOfImg[i]}" alt="imagem do produto ${tabelinha.names[i]}">
    </div>
    <div class="baixo">
        <a href="https://wa.me/5522998947260?text=${wpptext}" target="_blank" class="buy-btn btn btn-sm" id="produto-${i}">
           comprar <img id="wpp-logo" src="imagens/b24b5255a15e38ebe07b12094abdca65.png">
        </a>
    </div>
</section>
`;
  }
}
createProduct();

document.querySelectorAll('.buy-btn');
