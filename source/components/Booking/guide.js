const Guide = (name, style) => `
  <span>
    <button class=${style} disabled="true" style="width:2"></button>
    ${name}
  </span>
  `;

export default Guide;
