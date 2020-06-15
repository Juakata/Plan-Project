export default (state = { authError: null }, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return { ...state, authError: 'Login Failed' };
    case 'LOGIN_SUCCESS':
      return { ...state, authError: null };
    case 'SIGNOUT_ERROR':
      return { ...state, authError: 'Logout Failed' };
    case 'SIGNOUT_SUCCESS':
      return { ...state, authError: null };
    default:
      return state;
  }
}
