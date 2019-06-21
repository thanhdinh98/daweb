import table from '../Table/ManagementTable';
import input from '../Form/inputField';
import select from '../Form/select';

const infoTable = {
  info1: 'Cinema',
  info2: 'Room',
  info3: '',
};

const MovieManagement = ({
  data1, data,
}) => `
<div class="update-cluster-cinema">
<span class="update-cluster-cinema-title">Add Room</span>
<div class="update-cluster-cinema-body">
  <br>
  <br>
  <form>
      <div class="form-group">
        <div class="row right">
          <div class="col-sm-12">
            Cinema: ${select('cinema-name', 'Please choise', data1, 'select-Room')}  
          </div>
        </div>
        <br>
         <div class="row right">
           <div class="col-sm-6">
            Room name: ${input('room-name', 'text', 'Please enter Room name', 'form-add-movie')}
          </div>
          <div class="col-sm-6">
            Type: ${input('type-name', 'text', 'Please enter Type', 'form-add-movie')}
          </div>
        </div>
        <br>
         <div class="row right">
          <div class="col-sm-6">
            Row: ${input('row', 'number', 'Please enter Row', 'form-add-movie')}
          </div>
          <div class="col-sm-6">
            Col: ${input('col', 'number', 'Please enter Col', 'form-add-movie')}
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
  Room Maganement
</span>
<br>
<br>
${table(infoTable, data)}
</div>`;
export default MovieManagement;
