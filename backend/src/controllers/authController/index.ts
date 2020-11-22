import localSignUp from './localSignUp';
import googleSignUp from './googleSignUp';
import localLogin from './localLogin';
import googleLogin from './googleLogin';
import activateAccount from './activateAccount';
import logout from './logout';
import refreshToken from './refreshToken';
import forgotPassword from './forgotPassword';
import resetPassword from './resetPassword';
import updatePassword from './updatePassword';

const authController = {
  localSignUp,
  googleSignUp,
  localLogin,
  googleLogin,
  activateAccount,
  logout,
  refreshToken,
  forgotPassword,
  resetPassword,
  updatePassword
};

export default authController;
