import localSignup from './localSignup';
import googleSignup from './googleSignup';
import localLogin from './localLogin';
import googleLogin from './googleLogin';
import activateAccount from './activateAccount';
import getGoogleUser from './getGoogleUser';
import createPwdResetToken from './createPwdResetToken';
import resetPassword from './resetPassword';
import updatePassword from './updatePassword';

const authService = {
  localSignup,
  googleSignup,
  localLogin,
  googleLogin,
  activateAccount,
  getGoogleUser,
  createPwdResetToken,
  resetPassword,
  updatePassword
};

export default authService;
