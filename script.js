const ProductsQuantity = 7;
const pathImgs = ['imagens/LUAR com insta e whatsapp.png', 'imagens/LUAR só o nome.png','imagens/LUAR perfume.png'];
const main = document.querySelector('main');

const createProduct = () => {
  for(let i = 0; i < 50; i+=1){

    let text = `olá, desejo comprar o produto ${i%3 + 1}`
    let wpptext = text.replaceAll(' ','%20')

    main.innerHTML += 
    `
    <section>
    <div class="cima">
        <img src="${pathImgs[i%3]}" alt="">
    </div>
    <div class="baixo">
        <a href="https://wa.me/5522998947260?text=${wpptext}" target="_blank" class="buy-btn btn btn-sm" id="produto-${i}">
            comprar
        </a>
    </div>
</section>
`;
  }
}

createProduct();

document.querySelectorAll('.buy-btn')
