const InfoField = (name, value) => `
    <div class="row">
      <div class="col-sm-3">
        <span><b>${name}: </b></span>
      </div>
      <div class="col-sm-9">
        <span>${value}.</span>
      </div>
    </div>
  `;
export default InfoField;
