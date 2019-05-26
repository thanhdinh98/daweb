const addQueries = (queries) => {
  let queryBody = '?';
  // eslint-disable-next-line no-restricted-syntax
  for (const query of queries) {
    const key = Object.keys(query)[0];
    const value = query[key];
    queryBody += `${key}=${value}&`;
  }
  return queryBody;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  addQueries,
};
