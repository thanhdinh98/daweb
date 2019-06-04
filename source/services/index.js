import * as _ from 'lodash';
import { addQueries } from '../helpers';

const send = async (url, data) => {
  const api = process.env.API || '/api';

  let cloneUrl = url;
  let options = {
    mode: 'cors',
    method: _.isEqual(data.type, 'json') ? 'post' : 'get',
  };

  if (!_.isEqual(data.type, 'json')) {
    cloneUrl += addQueries(data.body);
  } else {
    options = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.body),
    };
  }

  try {
    const resposne = await fetch(api + cloneUrl, options);
    const resData = await resposne.text();
    return JSON.parse(resData);
  } catch (err) {
    throw err;
  }
};

export default {
  send,
};
