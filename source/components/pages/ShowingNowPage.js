import ListMovie from '../ListMovie/listMovie';

const ListMoviePage = movies => `
  <div class="list-movie-page">
  <div class="list-movie-title">
    <span>List movie</span>
  </div>
  <div class="row">
    <div class="col-sm-3">
      <button class="btn-movie-type" data-id='sciencefiction'>Science Fiction</button>
      <button class="btn-movie-type" data-id='action'>Action</button>
      <button class="btn-movie-type" data-id='adventure'>Adventure</button>
      <button class="btn-movie-type" data-id='cartoon'>Cartoon</button>
      <button class="btn-movie-type" data-id='horror'>Horror</button>
    </div>
    <div class="col-sm-9">
      <center>
        ${ListMovie(movies)}
      </center>
    </div>
    </div>
    `;

export default ListMoviePage;
