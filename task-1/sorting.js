'use strict';

const swap = (vetor, pos1, pos2) => {
  const temp = vetor[pos1];
  vetor[pos1] = vetor[pos2];
  vetor[pos2] = temp;
  return vetor;
};

const shuffle = (vetor, quant) => {
  for (let i = 0; i < quant; i++) {
    const pos1 = Math.floor(Math.random() * vetor.length);
    const pos2 = Math.floor(Math.random() * vetor.length);
    const temp = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = temp;
  }
  return vetor;
};

const bubble_sort = (vetor) => {
  const tamanho = vetor.length;
  for (let i = 0; i < tamanho - 1; i++) {
    for (let j = 0; j < tamanho - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        const temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      }
    }
  }
  return vetor;
};

const selection_sort = (vetor) => {
  const tamanho = vetor.length;
  for (let i = 0; i < tamanho - 1; i++) {
    let indiceMenor = i;
    for (let j = i + 1; j < tamanho; j++) {
      if (vetor[j] < vetor[indiceMenor]) {
        indiceMenor = j;
      }
    }
    if (indiceMenor !== i) {
      const temp = vetor[i];
      vetor[i] = vetor[indiceMenor];
      vetor[indiceMenor] = temp;
    }
  }
  return vetor;
};

const quick_sort = (vetor, start = 0, end = vetor.length - 1) => {
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
  quick_sort(vetor, start, index - 1);
  quick_sort(vetor, index + 1, end);
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

const add = () => {
  const input = document.getElementById('valor');
  const valor = Number(input.value);
  const lista = document.getElementById('valores');
  const node = document.createElement('li');
  const textNode = document.createTextNode(valor);
  node.appendChild(textNode);
  lista.appendChild(node);
  valores.push(parseInt(valor));
}

const limpar = () => {
  const listaValores = document.getElementById('valores');
  listaValores.innerHTML = '';
  const input = document.getElementById('valor');
  input.value = '';
}

const ordenar = () => {
  const lista = document.getElementById('valores');
  const selects = document.getElementById('selects');
  const vetor = Array.from(lista.children).map(item => parseInt(item.innerHTML));
  const algoritmo = selects.options[selects.selectedIndex].value;

  let start = 0;
  let end = vetor.length - 1;

  switch (algoritmo) {
    case 'bubble_sort':
      bubble_sort(vetor);
      break;
    case 'selection':
      selection_sort(vetor);
      break;
    case 'quick_sort':
      quick_sort(vetor, start, end);
      break;
  }

  const novosItens = vetor
    .map(item => `<li>${item}</li>`)
    .reduce((acumulador, item) => acumulador + item, '');
  lista.innerHTML = novosItens;
}

const misturar =( ) => {
  const lista = document.getElementById('valores');
  const array = Array.from(lista.children);
  shuffle(array, array.length);
  for (let i = 0; i < array.length; i++) {
    lista.appendChild(array[i]);
  }
}
