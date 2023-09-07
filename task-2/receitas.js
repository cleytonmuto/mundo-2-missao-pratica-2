'use strict';

const receitas = [
  {
    titulo: 'Arroz de Couve-Flor',
    imagem: '../assets/arroz.png',
    preparo: 'Deixe a couve-flor picada, adicione os ingredientes e refogue ' +
      'bem, adicione sal, tampe a panela e deixe cozinhar.',
    ingredientes: [ 'Arroz', 'Couve-Flor', 'Cebola Media', 'Azeite', 'Sal' ],
  },
  {
    titulo: 'Bolo de Café Cremoso',
    imagem: '../assets/bolo.png',
    preparo: 'Bata o açúcar, as gemas e o café, adicione farinha e chocolate ' +
      'e mexa bem, bata as claras e junte a mistura.',
    ingredientes: [ 'Farinha de Trigo', 'Açúcar', 'Café Coado',
      'Chocolate em Pó', 'Ovos' ],
  },
  {
    titulo: 'Coxinha de Brigadeiro',
    imagem: '../assets/coxinha.png',
    preparo: 'Junte o leite condensado, chocolate em pó e manteiga, aqueça ' +
      'no fogo baixo, envolva os morangos e passe no granulado',
    ingredientes: [ 'Leite Condensado', 'Chocolate em Pó', 'Manteiga',
      'Morango', 'Chocolate Granulado' ],
  }
];

const getListaIngredientes = (receita) => receita.ingredientes
  .map(ingrediente => `<li class="mb-1">${ingrediente}</li>`)
  .reduce((acumulador, item) => acumulador + item, '<ul class="mb-4">') + '</ul>';


const getCard = (receita) =>
  `<div class='card rounded-5 mx-2' style='width: 320px; height: 600px;'> 
     <img src='${receita.imagem}' class='card-img-top bg-warning'>
     <div class='card-body'>
       <h5 class='card-title text-center fs-4 p-2 fw-bold'>${receita.titulo}</h5>
       <div class='card-text'>${getListaIngredientes(receita)}</div>
       <hr>
       <p class='card-text p-2'>${receita.preparo}</p>
     </div>
   </div>`;

const preencheCatalogo = () => {
  document.getElementById('pnlCatalogo').innerHTML = receitas
    .map(receita => getCard(receita))
    .reduce((acumulador, item) => acumulador + item, '');
}

document.onload = preencheCatalogo();