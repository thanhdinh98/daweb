import { ID } from '../../helpers/constants';

export default () => {
  document.getElementById(ID.BUTTON.SEARCH).onclick = async () => {
    const value = document.getElementById(ID.VALUE.SEARCH);
    location.href = `/movie/search?q=${value.value}`;
  };
};
