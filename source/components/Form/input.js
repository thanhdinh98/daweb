const Field = (id, label, type, placeHodler, clas) => `
    <div class="form-group">
      <label>${label}</label>
      <input type=${type} class=${clas} placeholder=${placeHodler} id=${id}>
    </div>
  `;

export default Field;
