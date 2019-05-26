const NavBar = () => `
  <div class='row'>
    <div class='col-2 d-flex align-items-center justify-content-center'>
      <span class='logo'>Booking Ticket</span>
    </div>
    <div class='col-6 nav justify-content-start align-content-center'>
      <a href='#' class='active'><li>Home</li></a>
    </div>
    <div class='col-4 right-panel nav justify-content-end align-items-center'>
      <a href='#'>Sign In</a>
      <div class='hotline text-center'>
        <h5 class='phone'>086 981 2198</h5>
        <div class='text'>
          <i class="fas fa-phone fa-sm"></i>
          Request call
        </div>
      </div>
    </div>
  </div>
  `;

export default NavBar;
