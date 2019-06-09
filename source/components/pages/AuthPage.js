import Field from '../Form/field';
import SubmitButton from '../Button/formButton';

const Login = () => `
    <div class="container-fluid login-container">
      <div class="login">
        <div class="title-login"><b>Sign In Account</b></div>
        ${Field('Email Address', 'email', 'Please enter your email', 'email')}
        ${Field('Password', 'password', 'Please enter your password', 'password')}
        ${SubmitButton('Log In', 'loginButton')}
        <div class="div-linkTo">
          <a href="/register">Create account</a>
          <br><a href="/forgot">Forgot password</a>
          <br><a href="/">Home</a>
        </div>
      </div>
    </div>
  `;

const Register = () => `
    <div class="container-fluid register-container">
      <div class="register">
        <div class="title-register"><b>Create Account</b></div>
        ${Field('User Name', 'text', 'Please enter your user name', 'username')}
        ${Field('Email Address', 'email', 'Please enter your email', 'email')}
        ${Field('Phone Number', 'text', 'Please enter your phone number', 'phone')}
        ${Field('Password', 'password', 'Please enter your password', 'password')}
        ${Field('Confirm Password', 'password', 'Please reenter your password', 'conPassword')}
        ${SubmitButton('Register', 'registerButton')}
        <div class="div-linkTo">
          <a href="/login">Back to sign in</a>
          <br><a href="/">Home</a>
        </div>
      </div>
    </div>
  `;

const Forgot = () => `
    <div class="container-fluid forgot-password-container">
      <div class="forgot-password">
        <div class="title-forgot-password"><b>Forgot Password</b></div>
        ${Field('Email Address', 'email', 'Please enter your email', 'email')}
        ${SubmitButton('Send', 'forgot-passwordButton')}
        <div class="div-linkTo">
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
