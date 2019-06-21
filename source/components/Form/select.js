const renderOption = option => `
    <option value='${JSON.stringify(option)}'>${option.name}</option>
  `;

const selectField = ({
  id, name, options, cls,
}) => {
  const renderOptions = options.map(option => renderOption(option));

  return `
    <select class="${cls}" id=${id}>
      <option value='-1'>${name}</option>
      ${renderOptions}
    </select>
`;
};

export default selectField;
