const Field = (id, label, type, placeHodler) => `
    <div class="form-group">
      <label>${label}</label>
      <input type=${type} class="formInput" placeholder='${placeHodler}' id=${id}>
    </div>
  `;

export default Field;
