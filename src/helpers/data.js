export const contains = (item, search) => {
  const str = `${item.type}$$${item.name}$$${item.link}$$${item.description}`;

  return str.toUpperCase().indexOf(search.toUpperCase()) >= 0;
};
