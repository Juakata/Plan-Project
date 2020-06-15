export default (state = { authError: null }, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return { ...state, authError: 'Login failed' };
    case 'LOGIN_SUCCESS':
      return { ...state, authError: null };
    default:
      return state;
  }
}
