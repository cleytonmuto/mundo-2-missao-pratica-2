'use strict';

const swap = (vetor, pos1, pos2) => {
  [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

const shuffle = (vetor, quant = vetor.length) => {
  for (let i = 0; i < quant; i++) {
    const pos1 = Math.floor(Math.random() * vetor.length);
    const pos2 = Math.floor(Math.random() * vetor.length);
    swap(vetor, pos1, pos2);
  }
};

const bubbleSort = (vetor) => {
  for (let i = 0; i < vetor.length - 1; i++) {
    for (let j = 0; j < vetor.length - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1);
      }
    }
  }
};

const selectionSort = (vetor) => {
  for (let i = 0; i < vetor.length  - 1; i++) {
    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[i] > vetor[j]) {
        swap(vetor, i, j);
      }
    }
  }
};

const quickSort = (vetor, start = 0, end = vetor.length - 1) => {
  if (start == undefined) {
    start = 0;
  }
  if (end == undefined) {
    end = vetor.length - 1;
  }
  if (start >= end) {
    return;
  }
  const index = particionamento(vetor, start, end);
  quickSort(vetor, start, index - 1);
  quickSort(vetor, index + 1, end);
};

const particionamento = (vetor, start, end) => {
  const pivotValue = vetor[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (vetor[i] < pivotValue) {
      swap(vetor, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(vetor, pivotIndex, end);
  return pivotIndex;
};

let valores = [];

const limparCampo = () => {
  const input = document.getElementById('valor');
  input.value = '';
};

const add = () => {
  const input = document.getElementById('valor');
  const valor = Number(input.value);
  const lista = document.getElementById('valores');
  const node = document.createElement('li');
  const textNode = document.createTextNode(valor);
  node.appendChild(textNode);
  lista.appendChild(node);
  valores.push(parseInt(valor));
  limparCampo();
};

const limpar = () => {
  const listaValores = document.getElementById('valores');
  listaValores.innerHTML = '';
  const input = document.getElementById('valor');
  input.value = '';
};

const ordenar = () => {
  const lista = document.getElementById('valores');
  const selects = document.getElementById('selects');
  const vetor = Array.from(lista.children).map(item => parseInt(item.innerHTML));
  const algoritmo = selects.options[selects.selectedIndex].value;

  let start = 0;
  let end = vetor.length - 1;

  switch (algoritmo) {
    case 'bubbleSort':
      bubbleSort(vetor);
      break;
    case 'selection':
      selectionSort(vetor);
      break;
    case 'quickSort':
      quickSort(vetor, start, end);
      break;
  }

  const novosItens = vetor
    .map(item => `<li>${item}</li>`)
    .reduce((acumulador, item) => acumulador + item, '');
  lista.innerHTML = novosItens;
};

const misturar =( ) => {
  const lista = document.getElementById('valores');
  const array = Array.from(lista.children);
  shuffle(array);
  for (let i = 0; i < array.length; i++) {
    lista.appendChild(array[i]);
  }
};

const input = document.getElementById('valor');
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('addElement').click();
  }
});
