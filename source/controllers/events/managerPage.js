import managerAPI from '../manager';
import { displayToast } from '../../helpers';

const cinemaManagent = () => {
  document.querySelector('#submit').onclick = async (e) => {
    e.preventDefault();
    const cinemaName = document.querySelector('#cinema-name');
    const adress = document.querySelector('#cinema-adress');

    console.log(cinemaName.value, adress.value);

    const response = await managerAPI.addCinema(cinemaName.value, adress.value);
    displayToast(response.message, { delay: 3000 });
  };
};

export default {
  cinemaManagent,
};
