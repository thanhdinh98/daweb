import * as _ from 'lodash';
import moment from 'moment';
import SelectFeild from '../../components/Form/selectField';
import Seats from '../../components/Booking/seats';
import SubmitBookButton from '../../components/Button/submitBook';
import { ID } from '../../helpers/constants';
import { ajaxRender, clearContent } from '../../helpers';

import bookingAPI from '../booking';

export default () => {
  const handleSeats = () => {
    const tempArr = [];
    for (const seat of document.getElementsByClassName('btn-not-book')) {
      seat.onclick = () => {
        const temp = seat.getAttribute('id').split(' ');

        if ((typeof (Storage) !== 'undefined')) {
          if (tempArr.length === 0) {
            tempArr.push(temp);
            document.getElementById(seat.getAttribute('id')).classList.add('btn-booking');
            sessionStorage.setItem('arr', JSON.stringify(tempArr));
          } else {
            // eslint-disable-next-line no-unused-vars
            let flag = 0;

            tempArr.forEach((val, i) => {
              if (val[0] === temp[0] && val[1] === temp[1]) {
                flag = 1;
                tempArr.splice(i, 1);
              }
            });

            if (flag === 1) {
              document.getElementById(seat.getAttribute('id')).classList.remove('btn-booking');
            } else {
              document.getElementById(seat.getAttribute('id')).classList.add('btn-booking');
              tempArr.push(temp);
            }
            sessionStorage.setItem('arr', JSON.stringify(tempArr));
          }
        }
      };
    }
  };

  const handleTime = () => {
    document.getElementById(ID.SELECT_FIELD.TIME).onchange = async (e) => {
      clearContent(ID.RENDER_CONTENT.SEATS);
      const val = JSON.parse(e.target.value);

      const seats = await bookingAPI.getSeatsMovie(val.value);
      ajaxRender({
        id: ID.RENDER_CONTENT.SEATS,
        component: Seats(seats.columnSize, seats.rowSize, seats.seats),
        eventHandler: handleSeats,
      });
    };
  };

  const handleDate = () => {
    document.getElementById(ID.SELECT_FIELD.DATE).onchange = (e) => {
      clearContent(
        ID.RENDER_CONTENT.TIME_SELECT,
        ID.RENDER_CONTENT.SEATS,
      );

      const val = JSON.parse(e.target.value);
      const times = [];
      for (const time of val.times) {
        times.push({
          name: moment(time).format('LT'),
          value: time.showtimeID,
        });
      }

      ajaxRender({
        id: ID.RENDER_CONTENT.TIME_SELECT,
        component: SelectFeild({
          id: ID.SELECT_FIELD.TIME,
          name: 'Time',
          options: times,
        }),
        eventHandler: handleTime,
      });
    };
  };

  document.getElementById(ID.SELECT_FIELD.CINEMA).onchange = (e) => {
    clearContent(
      ID.RENDER_CONTENT.DATE_SELECT,
      ID.RENDER_CONTENT.TIME_SELECT,
      ID.RENDER_CONTENT.SEATS,
    );

    const dates = new Set();
    const val = JSON.parse(e.target.value);
    for (const showtime of val.showtimes) {
      dates.add({
        name: moment(showtime).format('LL'),
        times: val.showtimes.filter(x => _.isEqual(moment(x).format('LL'), moment(showtime).format('LL'))),
      });
    }

    ajaxRender({
      id: ID.RENDER_CONTENT.DATE_SELECT,
      component: SelectFeild({
        id: ID.SELECT_FIELD.DATE,
        name: 'Date',
        options: Array.from(dates),
      }),
      eventHandler: handleDate,
    });
  };

  document.getElementById('btn-booking').innerHTML = SubmitBookButton(ID.BUTTON.SUBMIT_BOOK);
  const eventButton = document.getElementById(ID.BUTTON.SUBMIT_BOOK);
  eventButton.onclick = () => {
    const result = JSON.parse(sessionStorage.getItem('arr'));
    alert(result);
  };
};
