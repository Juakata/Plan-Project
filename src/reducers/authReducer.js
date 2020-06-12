export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log(action.project);
      break;
    default:

  }
  return state;
}
