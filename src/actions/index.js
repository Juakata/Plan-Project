export const createProject = project => (dispatch, getState, extra) => {
  const { getFirestore } = extra;
  getFirestore().collection('projects').add({
    ...project,
    authorFirstName: 'Andoni',
    authorLastName: 'Uzquiano',
    authorId: '12345',
    createdAt: new Date(),
  }).then(() => dispatch({ type: 'CREATE_PROJECT', project }))
  .catch(err => dispatch({ type: 'CREATE_PROJECT_ERROR', err }))

}

export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  getFirebase().auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password,
  )
  .then(() => dispatch({ type: 'LOGIN_SUCCESS' }))
  .catch( err => dispatch({ type: 'LOGIN_ERROR', err }));
}
