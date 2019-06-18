import * as _ from 'lodash';
import moment from 'moment';
import SelectFeild from '../../components/Form/selectField';
import { ID } from '../../helpers/constants';
import { ajaxRender, clearContent } from '../../helpers';

export default () => {
  const handleTime = () => {
    document.getElementById(ID.SELECT_FIELD.TIME).onchange = (e) => {
      const val = JSON.parse(e.target.value);
      console.log(val);
    };
  };

  const handleDate = () => {
    document.getElementById(ID.SELECT_FIELD.DATE).onchange = (e) => {
      clearContent(ID.RENDER_CONTENT.TIME_SELECT);

      const val = JSON.parse(e.target.value);
      const times = [];
      for (const time of val.times) {
        times.push({
          name: moment(time).format('LT'),
          value: time.startTime,
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
};
