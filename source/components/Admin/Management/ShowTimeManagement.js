// import table from '../Table/ManagementTable';
import input from '../../Form/inputField';
// import select from '../../Form/select';

// const infoTable = {
//   info1: 'Cinema',
//   info2: 'Room',
//   info3: 'Movie',
//   info4: 'Show time',
//   info5: '',
// };

const MovieManagement = () => `
<div class="update-cluster-cinema">
<span class="update-cluster-cinema-title">Add Show time</span>
<div class="update-cluster-cinema-body">
<br>
<br>
<form>
<div class="form-group">
<div class="row right">
<div class="col-sm-6">
Cinema: <select class="select-Genre">
<option>CGV Hung Vuong</option>
<option>CGV Nowzone</option>
<option>CGV Dong khoi</option>
<option>CGV ViVo</option>
<option>CGV Su Van Hanh</option>
</select>  
</div>
<div class="col-sm-6">
Room :<select class="select-Genre">
<option>Rap 1</option>
<option>Rap 2</option>
<option>Rap 3</option>
<option>Rap 4</option>
<option>Rap 5</option>
</select>  
</div>
</div>
<br>
<div class="row right">
<div class="col-sm-6">
Movie :<select class="select-Genre">
<option>Adventure end game</option>
<option>Venom</option>
<option>The Nun</option>
<option>Us</option>
</select>
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
</div>`;
export default MovieManagement;
