export const toKebabCase = str => {
  return str.split(' ').join('-');
};

export const toNormalCase = str => {
  return str.split('-').join(' ');
};
