import Field from '../Form/field';
import SubmitButton from '../Button/update';

const UpdatePage = () => `
<div class="update-info-user-page">
<div class="update-info-user-title">
  <span>Update user</span>
</div>
<div class="update-info-user-body">

  <div class="row">
    <div class="col-sm-6">
      <div class="update-info-content">
        <form>
          <div class="Update-title"><b>Update infomation user</b></div>
          ${Field('name', 'Name', 'text', 'Trần Tuấn Việt')}
          ${Field('phone-number', 'Phone Number', 'number', '0123456789')}
          ${SubmitButton('update-info')};
        </form>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="update-info-content">
        <form>
          <div class="Update-title"><b>Change password</b></div>
          ${Field('old-password', 'Old password', 'password', 'Enter your old password')}
          ${Field('new-password', 'New password', 'password', 'Enter your new password')}
          ${Field('confirmed-password', 'Confirmed new password', 'password', 'Enter your Confirmed new password')}
          ${SubmitButton('update-password')};
        </form>
      </div>
    </div>
  </div>
</div>
</div>
  `;

export default UpdatePage;
