export const createProject = project => (dispatch, getState, extra) => {
  const { getFirestore, getFirebase } = extra;
  getFirestore().collection('projects').add({
    ...project,
    authorFirstName: 'Andoni',
    authorLastName: 'Uzquiano',
    authorId: '12345',
    createdAt: new Date(),
  }).then(() => dispatch({ type: 'CREATE_PROJECT', project }))
  .catch(err => dispatch({ type: 'CREATE_PROJECT_ERROR', err }))

}
