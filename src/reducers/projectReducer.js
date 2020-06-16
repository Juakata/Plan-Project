export default (state = {
  projects: [
    { id: 1, title: 'Project 1', content: "blablablabla bla" },
    { id: 2, title: 'Project 2', content: "blablablabla bla" },
    { id: 3, title: 'Project 3', content: "blablablabla bla" },
  ]
}, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log(action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log(action.err);
      return state;
    default:
      return state;
  }
}
