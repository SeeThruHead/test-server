const revwords = (str) => {
  if (typeof str !== 'string' || !str) return '';
  return str.match(/\S+/g)
    .reduce((acc, curr) => `${curr} ${acc}`);
};

export default revwords;
