const Trailer = iframeURL => `
    <div>
      <iframe width="920" height="390" src="${iframeURL}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;

export default Trailer;
