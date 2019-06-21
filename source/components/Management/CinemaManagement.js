import table from '../Table/ManagementTable';
import input from '../Form/inputField';

const infoTable = {
  info1: 'Cinema',
  info2: 'Adress',
  info3: '',
};

const CinemaManagement = data => `
<div class="update-cluster-cinema">
  <span class="update-cluster-cinema-title">Add Cinema</span>
  <div class="update-cluster-cinema-body">
    <br>
    <br>
    <form>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-6">
              <label for="exampleInputEmail1">Cinema name</label>
              ${input('cinema-name', 'text', 'Please enter Cinema name', 'formUpdate')}
            </div>
            <div class="col-sm-6">
              <label for="exampleInputPassword1">Cinema adress</label>
              ${input('cinema-adress', 'text', 'Please enter Cinema adress', 'formUpdate')}
            </div>
          </div>
          <button type="submit" class="btn-Update-cluster-cinema">Add</button>
      </div>
    </form>
  </div>
</div>
<div class="cluster-cinema">
<span class="cluster-cinema-title">
  Cinema
</span>
<br>
<br>
${table(infoTable, data)}
</div>`;
export default CinemaManagement;
