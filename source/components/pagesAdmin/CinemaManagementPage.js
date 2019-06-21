import Cinema from '../Revenue/CinemaRevenue';

const CinemaManagementPage = data => `
<div class="cinema-management-page">
<div class="cinema-management-title">
<span>Cinema Management</span>
</div>
<div class="row">
<div class="col-sm-2">
<button class="btn-movie-type">Cinema</button>
<button class="btn-movie-type">Room</button>
<button class="btn-movie-type">Movie</button>
<button class="btn-movie-type">Cinema revenue</button>
<button class="btn-movie-type">Movie revenue</button>
</div>
<div class="col-sm-10">
${Cinema(data)}
</div>
</div>
</div>`;
export default CinemaManagementPage;
