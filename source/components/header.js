const NavBar = () => `
  <div class='row'>
    <div class='col-2 d-flex align-items-center justify-content-center'>
      <span class='logo'>Code Gym</span>
    </div>
    <div class='col-7 nav justify-content-start align-content-center'>
      <a href='/' class='active'><li>Home</li></a>
      <div class='row' style="padding-left:20px;">
        <div class='col-sm-8'>
          <input type='text' class='form-input' placeholder="Search here"/>
        </div>
        <div class="col-sm-4">
          <button class='btn btn-outline-primary'>Search</button>
        </div>
      </div>
    </div>
    <div class='col-3 right-panel nav justify-content-end align-items-center'>
      <a class="sign-in"  href='/login'>Sign In</span>
      <a class="sign-in"  href='/register'>Register</a>
      <div class='hotline text-center'>
        <h5 class='phone'>086 981 2198</h5>
        <div class='text'>
          <i class="fas fa-phone fa-sm"></i>
          Request call
        </div>
      </div>
    </div>
  </div>
  <br>
  
  `;

export default NavBar;