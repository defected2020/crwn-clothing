import './Authentication.scss';

import SignUpForm from '../../components/sign-up-form/SignUpForm.js';
import SignInForm from '../../components/sign-in-form/SignInForm.js';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
