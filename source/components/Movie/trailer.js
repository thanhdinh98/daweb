const Trailer = iframeURL => `
    <div>
      <iframe width="620" height="325" src="${iframeURL}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;

export default Trailer;
