import table from '../Table/ManagementTable';
import input from '../Form/inputField';
import select from '../Form/select';

const infoTable = {
  info1: 'Cinema',
  info2: 'Room',
  info3: 'Movie',
  info4: 'Show time',
  info5: '',
};

const MovieManagement = ({
  data1, data2, data3, data,
}) => `
<div class="update-cluster-cinema">
<span class="update-cluster-cinema-title">Add Show time</span>
<div class="update-cluster-cinema-body">
<br>
<br>
<form>
<div class="form-group">
<div class="row right">
<div class="col-sm-6">
Cinema: ${select('Cinema-name', 'Please choise', data1, 'select-Genre')} 
</div>
<div class="col-sm-6">
Room : ${select('Room-name', 'Please choise', data2, 'select-Genre')} 
</div>
</div>
<br>
<div class="row right">
<div class="col-sm-6">
Movie : ${select('Movie-name', 'Please choise', data3, 'select-Genre')}
</div>
<div class="col-sm-6">
date: ${input('show-time', 'datetime-local', '', 'form-add-movie')}
</div>
</div>
<br>
<button type="submit" class="btn-Update-cluster-cinema">Add</button>
</div>
</form>
</div>
</div>
<div class="cluster-cinema">
<span class="cluster-cinema-title">
  Show time management
</span>
<br>
<br>
${table(infoTable, data)}
</div>`;
export default MovieManagement;
