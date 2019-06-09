const Detail = (title, genre, release, duration) => `
  <div>
    <span class="title-movie"><center><b>${title}</b></center></span>
    <br>

    <div class="row">
      <div class="col-sm-3">
        <span><b>Genre: </b></span>
      </div>
      <div class="col-sm-9">
        <span>${genre}.</span>
      </div>
    </div>
    <br>

    <div class="row">
      <div class="col-sm-3">
        <span><b>Release: </b></span>
      </div>
      <div class="col-sm-9">
        <span>${release}.</span>
      </div>
    </div>
    <br>

    <div class="row">
      <div class="col-sm-3">
        <span><b>Time: </b></span>
      </div>
      <div class="col-sm-9">
        <span>${duration}</span>
      </div>
    </div>
  </div>  
  `;

export default Detail;
