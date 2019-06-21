const FieldInfo = (name, value) => `
  <div class="row ticket-info">
    <div class="col-sm-5 info-name">
      ${name} :
    </div>
    <div class="col-sm-7 ticket-content">
      ${value}.
    </div>
  </div>`;

export default FieldInfo;
