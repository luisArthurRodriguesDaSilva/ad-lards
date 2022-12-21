# ad-lards - O site da [Luar Cosmeticos](https://www.instagram.com/luar.cosmeticos/)

ja de adianto você pode conferir ele atravéz deste [link](https://luarcosmeticos.netlify.app/), sem imagens de preview porque aí estraga a surpresa

## Principais funcionalidades

* não exige um backend
* responsivo
* atualizado sempre que a dona da loja precisar

## Funcionamento

Para reunir os principais produtos das 3 lojas vendidos pela Luar Cosméticos (Boticário, Eudora e OUI) o ad-lards utiliza um script em python com o selenium, assim reunindo as informações necessárias gerando uma página ~~muito mais bonita~~ com os principais produtos de cada loja. **~~Boticário me contrata~~**

## Arquivos interessantes

* [script sobre a frase que some](https://github.com/luisArthurRodriguesDaSilva/ad-lards/blob/master/src/rolamentoScript.js)
* [script em python que faz a coleta de dados e salva eles](https://github.com/luisArthurRodriguesDaSilva/ad-lards/blob/master/scrap/scraping.py)
* [aonde os dados coletados ficam salvos](https://github.com/luisArthurRodriguesDaSilva/ad-lards/blob/master/src/relat.js)

## Possíveis melhorias

Como eu tinha uma experiência bem menor com programação quando comecei a fazer esse site percebi pontos de melhoria que se eu soubesse no passado me pouparia bastante tempo, como os componentes React que poderiam facilmente simplificar essa parte do [script de construção](https://github.com/luisArthurRodriguesDaSilva/ad-lards/blob/master/src/script.js)

```javascript
const createProduct = () => {
  for(let i = 0; i < tabelinha.adressesOfImg.length; i+=1){
    main.innerHTML += 
    `
  <section>
    <div class="cima">
        <img src="${tabelinha.adressesOfImg[i]}" alt="imagem do produto ${tabelinha.names[i]}" id="produto-${i}">
        
        <p class="nameOfProd">${tabelinha.names[i]}</p>
        <div class="valores">
          <div class="prod-p" id="price-of${i}">R$${parseFloat(tabelinha.prices[i]).toFixed(2).replace('.',',')}</div>
          <div class="accum-price" id="ac-price-of-${i}">R$0,00</div>
        </div>
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
```

Se você ainda não viu o site ainda veja agora neste [link](https://luarcosmeticos.netlify.app/)
E se não comprou na melhor loja de cosméticos da região dos lagos, compre agora [aqui](https://luarcosmeticos.netlify.app/)
