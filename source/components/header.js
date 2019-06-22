import * as _ from 'lodash';
import { ID } from '../helpers/constants';

const NavBar = (user) => {
  let userName = `<a class="sign-in"  href='/account/login'>Sign In</span>
                  <a class="sign-in"  href='/account/register'>Register</a>`;
  if (!user.error) {
    userName = `<a class='sign-in' href='/account/tickets'><i class="fas fa-shopping-cart"></i></a>
                <a class="sign-in"  href='/account/update'>${user.user.username}</a>
                <a class="sign-in"  href='/account/logout'>Logout</a>`;
  }

  if (!_.isEmpty(user) && !_.isEmpty(user.user) && _.isEqual(user.user.permission, 2)) {
    userName = `<a class="sign-in"  href='/account/update'>${user.user.username}</a>
                <a class="sign-in"  href='/account/logout'>Logout</a>`;
  }
  return `
  <div class='row navar'>
    <div class='col-2 d-flex align-items-center justify-content-center'>
      <span class='logo'>Code Gym</span>
    </div>
    <div class='col-6 nav justify-content-start align-content-center'>
      <a href='/' class='active'><li>Home</li></a>
      <div class='row' style="padding-left:20px;">
        <div class='col-sm-8'>
          <input type='text' class='form-input' placeholder="Search here" id='${ID.VALUE.SEARCH}'/>
        </div>
        <div class="col-sm-4">
          <button class='btn btn-outline-primary' id='${ID.BUTTON.SEARCH}'>Search</button>
        </div>
      </div>
    </div>
    <div class='col-4 right-panel nav justify-content-end align-items-center'>
      ${userName}
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
};

export default NavBar;
