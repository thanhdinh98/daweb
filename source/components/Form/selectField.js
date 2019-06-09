const renderOption = option => `
    <option value=${option.id}>${option.name}</option>
  `;

const selectField = ({ id, name, options }) => {
  const renderOptions = options.map(option => renderOption(option));

  return `
    <div>
      <span>${name}</span>
      <select class="general-information" id=${id}>
        <option value='-1'>${name}</option>
        <option value='2'>hehe</option>
        ${renderOptions}
      </select>
    </div>
`;
};

export default selectField;
