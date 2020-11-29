import localSignup from './localSignup';
import activateAccount from './activateAccount';
import localLogin from './localLogin';
import resetPassword from './resetPassword';
import createPwdResetToken from './createPwdResetToken';

/* import googleSignup from './googleSignup';

import googleLogin from './googleLogin';

import getGoogleUser from './getGoogleUser';


import updatePassword from './updatePassword'; */

const authService = {
  localSignup,
  activateAccount,
  localLogin,
  resetPassword,
  createPwdResetToken
  /* googleSignup,
  
  googleLogin,
  
  getGoogleUser,
 
  
  updatePassword */
};

export default authService;
