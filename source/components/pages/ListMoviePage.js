import ListMovie from '../ListMovie/ListMovie';

const ListMoviePage = data => `
<div class="list-movie-page">
<div class="list-movie-title">
  <span>List movie</span>
</div>
<div class="row">
  <div class="col-sm-3">
    <button class="btn-movie-type">Science Fiction</button>
    <button class="btn-movie-type">Action</button>
    <button class="btn-movie-type">Adventure</button>
    <button class="btn-movie-type">Cartoon</button>
    <button class="btn-movie-type">Thriller</button>
  </div>
  <div class="col-sm-9">
    <center>
      <div class="d-flex flex-wrap body-list-movie">
        ${ListMovie}
      </div>
    </center>
  </div>
  </div>
  `;

export default ListMoviePage;