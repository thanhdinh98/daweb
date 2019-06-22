import field from '../../Form/input';

const CinemaRevenue = () => `
  <br>
  <div class="row">
    <div class="col-sm-6">
      ${field('form-date', 'From date', 'date', '', 'form-revenue')}
    </div>
    <div class="col-sm-6">
      ${field('to-date', 'To date', 'date', '', 'form-revenue')}
    </div>
  </div>
  <br>
  <center>
    <button class="btn-calculator">Calculator</button>
  </center>
`;
export default CinemaRevenue;
