import { ID } from '../../helpers/constants';

export default () => {
  document.getElementById(ID.BUTTON.BOOKING).onclick = (e) => {
    const id = e.target.getAttribute('data-id');
    location.href = `/movie/${id}/booking`;
  };
};
