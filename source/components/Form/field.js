const Field = (label, type, placeHodler, id) => `
    <div class="form-group">
      <label>${label}</label>
      <input type=${type} class="formInput" placeholder=${placeHodler} id=${id}>
    </div>
  `;

export default Field;
