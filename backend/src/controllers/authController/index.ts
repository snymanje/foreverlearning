import localSignUp from './localSignUp';
import activateAccount from './activateAccount';
import localLogin from './localLogin';
import forgotPassword from './forgotPassword';
import resetPassword from './resetPassword';
/* import googleSignUp from './googleSignUp';

import googleLogin from './googleLogin';

import logout from './logout';
import refreshToken from './refreshToken';
import forgotPassword from './forgotPassword';

import updatePassword from './updatePassword'; */

const authController = {
  localSignUp,
  activateAccount,
  localLogin,
  forgotPassword,
  resetPassword
  /*   googleSignUp,
  
  googleLogin,
  activateAccount,
  logout,
  refreshToken,
  
  
  updatePassword */
};

export default authController;
