const Image = (imageURL, component = '') => `
    <div class='text-center'>
      <img class="poster" src="${imageURL}">
      ${component}      
    </div>
  `;

export default Image;
