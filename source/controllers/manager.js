import services from '../services';

export default {
  statisticCinema: (fromTime, toTime) => services.send('/manager/statistic-cinema', {
    type: 'params',
    body: {
      fromTime,
      toTime,
    },
  }),
  statisticMovie: (fromTime, toTime) => services.send('/manager/statistic-movie', {
    type: 'params',
    body: {
      fromTime,
      toTime,
    },
  }),

  addCinema: (cinemaName, cinemaAdddress) => services.send('/manager/add-cinema', {
    type: 'json',
    body: {
      cinemaName,
      cinemaAdddress,
    },
  }),
};
