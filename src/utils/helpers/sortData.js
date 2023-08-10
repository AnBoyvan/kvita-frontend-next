export const sortData = ({ data, fieldName, type = 'asc' }) => {
  if (!data || !Array.isArray(data) || !fieldName) {
    throw new Error('Invalid input data or parameters');
  }

  if (type === 'asc') {
    return data.slice().sort((a, b) => {
      if (typeof a[fieldName] === 'string') {
        return a[fieldName].localeCompare(b[fieldName]);
      } else if (typeof a[fieldName] === 'number') {
        return a[fieldName] - b[fieldName];
      }
      return 0;
    });
  } else if (type === 'desc') {
    return data.slice().sort((a, b) => {
      if (typeof a[fieldName] === 'string') {
        return b[fieldName].localeCompare(a[fieldName]);
      } else if (typeof a[fieldName] === 'number') {
        return b[fieldName] - a[fieldName];
      }
      return 0;
    });
  } else {
    throw new Error('Invalid sorting type');
  }
};
