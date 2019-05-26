export default () => {
  const api = process.env.API || '/api';

  const get = async (url) => {
    try {
      const response = await fetch(api + url, {
        mode: 'cors',
        method: 'get',
      });
      const data = await response.text();
      return JSON.parse(data);
    } catch (err) {
      throw err;
    }
  };

  return {
    get,
  };
};
