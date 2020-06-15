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

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  getFirebase().auth().signOut()
  .then(() => dispatch({ type: 'SIGNOUT_SUCCESS' }))
  .catch(err => dispatch( { type: 'SIGNOUT_ERROR', err }));
}

export const signUp = newUser => async (dispatch, getState, extra) => {
  const { getFirestore, getFirebase } = extra;
  const response = await getFirebase().auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password,
  );
  getFirestore().collection('users').doc(response.user.uid).set({
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    initials: `${newUser.firstName[0]}${newUser.lastName[0]}`,
  })
  .then(() => dispatch({ type: 'SIGNUP_SUCCESS' }))
  .catch(err => dispatch({ type: 'SIGNUP_ERROR', err }));
}
