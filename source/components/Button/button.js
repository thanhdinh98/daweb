const Button = (type, value, movieID) => `
    <button type="submit" class="${type}" data-id=${movieID}>${value}</button>
  `;

export default Button;
