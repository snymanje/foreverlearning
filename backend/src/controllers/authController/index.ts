import localSignUp from './localSignUp';
import activateAccount from './activateAccount';
import localLogin from './localLogin';
import forgotPassword from './forgotPassword';
import resetPassword from './resetPassword';
import refreshToken from './refreshToken';
import updatePassword from './updatePassword';
import googleSignUp from './googleSignUp';
import googleLogin from './googleLogin';
import logout from './logout';

const authController = {
  localSignUp,
  activateAccount,
  localLogin,
  forgotPassword,
  resetPassword,
  refreshToken,
  updatePassword,
  googleSignUp,
  googleLogin,
  logout
};

export default authController;
