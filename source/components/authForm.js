const authForm = () => ({
  login: `
    <div class="container-fluid" id="login-container">
      <div class="login">
        <form>
          <div class="title-login"><b>Sign In Account</b></div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="formInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="formInput" id="exampleInputPassword1" placeholder="Enter your password">
          </div>
          <button type="submit" class="btn btn-success" id="loginButton">Log in</button>
          <div id="div-linkTo">
            <a href="/register">Create account</a>
            <br><a href="/forgot">Forgot password</a>
            <br><a href="/">Home</a>
          </div>
        </form>
      </div>
    </div>
  `,
  register: `
    <div class="container-fluid" id="register-container">
      <div class="register">
        <form>
          <div class="title-register"><b>Create Account</b></div>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="email" class="formInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="formInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="formInput" id="exampleInputPassword1" placeholder="Enter your password">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirmed password</label>
            <input type="password" class="formInput" id="exampleInputPassword1" placeholder="Comfirm your password">
          </div>
          <button type="submit" class="btn btn-success" id="registerButton">Register</button>
          <div id="div-linkTo">
            <a href="/login">Back to sign in</a>
            <br><a href="/">Home</a>
            <!-- <br><a href="/forgot">Forgot password</a> -->
          </div>
        </form>
      </div>
    </div>
  `,
  forgot: `
    <div class="container-fluid" id="forgot-password-container">
      <div class="forgot-password">
        <form>
          <div class="title-forgot-password"><b>Forgot Password</b></div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="formInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email">
          </div>
          <button type="submit" class="btn btn-success" id="forgot-passwordButton">Send</button>
          <div id="div-linkTo">
            <a href="/register">Create account</a>
            <br><a href="/login">Back to sign in</a>
            <br><a href="/">Home</a>
          </div>
        </form>
      </div>
    </div>
  `,
});

export default authForm;
