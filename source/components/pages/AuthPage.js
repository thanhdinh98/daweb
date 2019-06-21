import Field from '../Form/field';
import SubmitButton from '../Button/submitForm';

const Login = () => `
    <div class="container-fluid login-container">
      <div class="login">
        <div class="title-login"><b>Sign In Account</b></div>
        ${Field('email', 'Email Address', 'email', 'Please enter your email')}
        ${Field('password', 'Password', 'password', 'Please enter your password')}
        ${SubmitButton('loginButton', 'Log In')}
        <div class="div-linkTo">
          <a href="/account/register">Create account</a>
          <br><a href="/">Home</a>
        </div>
      </div>
    </div>
  `;

const Register = () => `
    <div class="container-fluid register-container">
      <div class="register">
        <div class="title-register"><b>Create Account</b></div>
        ${Field('username', 'User Name', 'text', 'Please enter your user name')}
        ${Field('email', 'Email Address', 'email', 'Please enter your email')}
        ${Field('phone', 'Phone Number', 'text', 'Please enter your phone number')}
        ${Field('password', 'Password', 'password', 'Please enter your password')}
        ${Field('conPassword', 'Confirm Password', 'password', 'Please reenter your password')}
        ${SubmitButton('registerButton', 'Register')}
        <div class="div-linkTo">
          <a href="/account/login">Back to sign in</a>
          <br><a href="/">Home</a>
        </div>
      </div>
    </div>
  `;

const Forgot = () => `
    <div class="container-fluid forgot-password-container">
      <div class="forgot-password">
        <div class="title-forgot-password"><b>Forgot Password</b></div>
        ${Field('email', 'Email Address', 'email', 'Please enter your email')}
        ${SubmitButton('forgot-passwordButton', 'Send')}
        <div class="div-linkTo">
          <a href="/account/register">Create account</a>
          <br><a href="/account/login">Back to sign in</a>
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
