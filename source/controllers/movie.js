import * as _ from 'lodash';
import services from '../services';
import { addQueries } from '../helpers';

const { get } = services();

const beforeRender = () => {
  const getListMovies = (url, queries = {}) => get(
    _.isEmpty(queries) ? url : url + addQueries(queries),
  );

  return {
    getListMovies,
  };
};

const afterRender = () => {
};

export default {
  beforeRender,
  afterRender,
};
