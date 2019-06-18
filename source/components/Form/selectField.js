const renderOption = option => `
    <option value='${JSON.stringify(option)}'>${option.name}</option>
  `;

const selectField = ({ id, name, options }) => {
  const renderOptions = options.map(option => renderOption(option));

  return `
    <div class="col-sm-4">
      <span>${name}</span>
      <select class="general-information" id=${id}>
        <option value='-1'>${name}</option>
        ${renderOptions}
      </select>
    </div>
`;
};

export default selectField;
