import Form from '../Form/form';
import FormButton from '../Form/button';

const Login = () => `
    <div class="container-fluid" id="login-container">
      <div class="login">
        <div class="title-login"><b>Sign In Account</b></div>
        ${Form('Email Address', 'email', 'Please enter your email', 'email')}
        ${Form('Password', 'password', 'Please enter your password', 'password')}
        ${FormButton('Log In', 'loginButton')}
        <div id="div-linkTo">
          <a href="/register">Create account</a>
          <br><a href="/forgot">Forgot password</a>
          <br><a href="/">Home</a>
        </div>
      </div>
    </div>
  `;

const Register = () => `
    <div class="container-fluid" id="register-container">
      <div class="register">
        <div class="title-register"><b>Create Account</b></div>
        ${Form('User Name', 'text', 'Please enter your user name', 'username')}
        ${Form('Email Address', 'email', 'Please enter your email', 'email')}
        ${Form('Phone Number', 'text', 'Please enter your phone number', 'phone')}
        ${Form('Password', 'password', 'Please enter your password', 'password')}
        ${Form('Confirm Password', 'password', 'Please reenter your password', 'conPassword')}
        ${FormButton('Register', 'registerButton')}
        <div id="div-linkTo">
          <a href="/login">Back to sign in</a>
          <br><a href="/">Home</a>
        </div>
      </div>
    </div>
  `;

const Forgot = () => `
    <div class="container-fluid" id="forgot-password-container">
      <div class="forgot-password">
        <div class="title-forgot-password"><b>Forgot Password</b></div>
        ${Form('Email Address', 'email', 'Please enter your email', 'email')}
        ${FormButton('Send', 'forgot-passwordButton')}
        <div id="div-linkTo">
          <a href="/register">Create account</a>
          <br><a href="/login">Back to sign in</a>
          <br><a href="/">Home</a>
        </div>
      </div>
    </div>
  `;

export default {
  Login,
  Register,
  Forgot,
};
