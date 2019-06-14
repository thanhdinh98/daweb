import moment from 'moment';

const Detail = ({
  title, genre, release, duration, description,
}) => `
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
        <span><b>Description: </b></span>
      </div>
      <div class="col-sm-9">
        <span>${description}.</span>
      </div>
    </div>
    <br>

    <div class="row">
      <div class="col-sm-3">
        <span><b>Release: </b></span>
      </div>
      <div class="col-sm-9">
        <span>${moment(release).format('L')}.</span>
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
