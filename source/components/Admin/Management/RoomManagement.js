// import table from '../Table/ManagementTable';
import input from '../../Form/inputField';
// import select from '../../Form/select';


const MovieManagement = () => `
<div class="update-cluster-cinema">
<span class="update-cluster-cinema-title">Add Room</span>
<div class="update-cluster-cinema-body">
  <br>
  <br>
  <form>
      <div class="form-group">
        <div class="row right">
          <div class="col-sm-12">
            Cinema: <select class="select-Room">
            <option>CGV Hung Vuong</option>
            <option>CGV Nowzone</option>
            <option>CGV Dong khoi</option>
            <option>CGV ViVo</option>
            <option>CGV Su Van Hanh</option>
         </select>  
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
</div>`;
export default MovieManagement;
