import field from '../Form/input';
import table from '../Table/ManagementTable';

const infoTable = {
  info1: 'Cinema',
  info2: 'Ticket total',
  info3: 'Money toTal',
};

const CinemaRevenue = data => `
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
${table(infoTable, data)}
</center>`;
export default CinemaRevenue;
