'use strict';

const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

const shuffle = (array, quant = array.length) => {
  for (let i = 0; i < quant; i++) {
    const pos1 = Math.floor(Math.random() * array.length);
    const pos2 = Math.floor(Math.random() * array.length);
    swap(array, pos1, pos2);
  }
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};

const insertionSort = (array) => {
  let i = 1;
  while (i < array.length) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j, j - 1);
      j--;
    }
    i++;
  }
}

const selectionSort = (array) => {
  for (let i = 0; i < array.length  - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        swap(array, i, j);
      }
    }
  }
};

const quickSort = (array, start = 0, end = array.length - 1) => {
  start = start == undefined ? 0 : start;
  end = end == undefined ? array.length - 1 : end;
  if (start >= end) {
    return;
  }
  const index = partition(array, start, end);
  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);
};

const partition = (array, start, end) => {
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] < array[end]) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(array, pivotIndex, end);
  return pivotIndex;
};

const limparValor = () => {
  document.getElementById('valor').value = '';
};

const add = () => {
  const valor = Number(document.getElementById('valor').value);
  const textNode = document.createTextNode(valor);
  const node = document.createElement('li');
  node.appendChild(textNode);
  document.getElementById('valores').appendChild(node);
  limparValor();
};

const limparValores = () => {
  limparValor();
  document.getElementById('valores').innerHTML = '';
};

const ordenar = () => {
  const lista = document.getElementById('valores');
  const selects = document.getElementById('selects');
  const array = Array.from(lista.children).map(item => parseInt(item.innerHTML));
  const algoritmo = selects.options[selects.selectedIndex].value;
  switch (algoritmo) {
    case 'bubbleSort': bubbleSort(array); break;
    case 'insertionSort': insertionSort(array); break;
    case 'selectionSort': selectionSort(array); break;
    case 'quickSort': quickSort(array, 0, array.length - 1); break;
  }
  lista.innerHTML = array
    .map(item => `<li>${item}</li>`)
    .reduce((acumulador, item) => acumulador + item, '');
};

const misturar = ( ) => {
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
