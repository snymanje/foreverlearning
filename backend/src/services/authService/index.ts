import localSignup from './localSignup';
import activateAccount from './activateAccount';
import localLogin from './localLogin';
import resetPassword from './resetPassword';
import createPwdResetToken from './createPwdResetToken';
import updatePassword from './updatePassword';
import googleSignup from './googleSignup';
import googleLogin from './googleLogin';
import getGoogleUser from './getGoogleUser';

const authService = {
  localSignup,
  activateAccount,
  localLogin,
  resetPassword,
  createPwdResetToken,
  updatePassword,
  googleSignup,
  googleLogin,
  getGoogleUser
};

export default authService;
