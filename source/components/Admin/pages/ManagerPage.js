const ManagerPage = component => `
<div class="cinema-management-page">
  <div class="cinema-management-title">
    <span>Management</span>
  </div>
    <div class="row">
    <div class="col-sm-2">
      <a href='/cinema-revenue'><button class="btn-movie-type">Cinema revenue</button></a>
      <a href='/movie-revenue'><button class="btn-movie-type">Movie revenue</button></a>
      <a href='/cinema-management'><button class="btn-movie-type">Cinema management</button></a>
      <a href='/room-management'><button class="btn-movie-type">Room management</button></a>
      <a href='/showtime-management'><button class="btn-movie-type">Show time management</button></a>
      <a href='/movie-management'><button class="btn-movie-type">Movie management</button></a>

    </div>
    <div class="col-sm-10">
      ${component()}
    </div>
  </div>
</div>`;
export default ManagerPage;
