import Field from '../Form/field';
import SubmitButton from '../Button/update';

import { ID } from '../../helpers/constants';

const UpdatePage = user => `
<div class="update-info-user-page">
<div class="update-info-user-title">
  <span>Update User</span>
</div>
<div class="update-info-user-body">

  <div class="row">
    <div class="col-sm-6">
      <div class="update-info-content">
        <form>
          <div class="Update-title"><b>Update infomation user</b></div>
          ${Field('name', 'Name', 'text', user.userName)}
          ${Field('phone-number', 'Phone Number', 'number', user.phoneNumber)}
        </form>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="update-info-content">
        <form>
          <div class="Update-title"><b>Change password</b></div>
          ${Field('old-password', 'Old password', 'password', '')}
          ${Field('new-password', 'New password', 'password', '')}
          ${SubmitButton(ID.BUTTON.UPDATE_INFO)}
        </form>
      </div>
    </div>
  </div>
</div>
</div>
  `;

export default UpdatePage;
