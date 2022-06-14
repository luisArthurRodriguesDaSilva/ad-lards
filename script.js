const ProductsQuantity = 7;
const pathImgs = ['imagens/LUAR com insta e whatsapp.png', 'imagens/LUAR só o nome.png','imagens/LUAR perfume.png'];
const main = document.querySelector('main');

const createProduct = () => {
  for(let i = 0; i < 50; i+=1){
    main.innerHTML += 
    `
    <section>
    <div class="cima">
        <img src="${pathImgs[i%3]}" alt="">
    </div>
    <div class="baixo">
        <button class="btn btn-sm">
            comprar
        </button>
    </div>
</section>
`;
  }
}

createProduct();