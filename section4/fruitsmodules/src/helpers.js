// const choice = (itens) => {
//   let aleatorio = itens[Math.floor(Math.random() * itens.length)];
//   return aleatorio;
// };
// console.log(choice(["banana", "elefante", "café"]));

const choice = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
};

const remove = (items, item) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
};

export { choice, remove };
