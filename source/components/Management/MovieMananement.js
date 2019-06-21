import table from '../Table/ManagementTable';
import input from '../Form/inputField';

const infoTable = {
  info1: 'Movie',
  info2: 'Genre',
  info3: 'Money toTal',
};

const MovieManagement = data => `
<div class="update-cluster-cinema">
<span class="update-cluster-cinema-title">Add Movie</span>
<div class="update-cluster-cinema-body">
  <br>
  <br>
  <form>
      <div class="form-group">
        <div class="row right">
          <div class="col-sm-6">
            <!-- <div class=""></div> -->
            Movie name: ${input('moive-name', 'text', 'Please enter Movie name', 'form-add-movie')}
          </div>
          <div class="col-sm-6">
            Genre: <select class="select-Genre">
               <option>Action</option>
               <option>Cartoon</option>
               <option>Science fiction</option>
               <option>Advanture</option>
               <option>horror</option>
            </select> 
          </div>
        </div>
        <br>
         <div class="row right">
          <div class="col-sm-6">
            Release: ${input('release-movie', 'date', 'Please enter Release', 'form-add-movie')}
          </div>
          <div class="col-sm-6">
            Duration: ${input('duration-movie', 'number', 'Please enter Duration', 'form-add-movie')}
          </div>
        </div>
        <br>
         <div class="row right">
          <div class="col-sm-6">
            Trailer: ${input('trailer-movie', 'text', 'Please enter link Trailer', 'form-add-movie')}
          </div>
          <div class="col-sm-6">
            Image: ${input('image-movie', 'text', 'Please enter link Image', 'form-add-movie')}
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-sm-12">
            <label for="exampleInputEmail1">Description</label>
            <textarea type="text" class="formUpdate"></textarea>
          </div>
        </div>
        <button type="submit" class="btn-Update-cluster-cinema">Add</button>
    </div>
  </form>
</div>
</div>
<div class="cluster-cinema">
<span class="cluster-cinema-title">
  Movie
</span>
<br>
<br>
${table(infoTable, data)}
</div>`;
export default MovieManagement;
