const choice = (items) => {
  const randomIdx = Math.floor(Math.random() * items.length);
  const item = items[randomIdx];
  return item;
};
const remove = (items, item) => {
  const index = items.findIndex((element) => element === item);
  if (index === -1) return undefined;
  const result = items.slice(0, index).concat(items.slice(index + 1));
  return result;
};

export { choice, remove };
