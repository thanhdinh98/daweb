const ResetpassPage = () => `
  <div class="container">
  <div class="update-info-user-page">
    <div class="update-info-user-title">
      <span>Reset Password</span>
    </div>
    <div class="update-info-user-body">

      <div class="row">
        <div class="col-sm-12">
          <div class="update-info-content">
            <form>
              <div class="Update-title"><b>Forgot password</b></div>
              <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="formUpdate" id="password" placeholder="Enter your new password">
              </div>
               <button type="submit" class="btn-Update-info" id='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

export default ResetpassPage;
