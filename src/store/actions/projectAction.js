

export const createProject = (project) => {
    return (dispatch, getState,{getFirebase,getFirestore}) => {
      // make async call to database
      const firestore =getFirestore();
      firestore.collection('projects').add({
          ...project,
          Age:'22',
          Sex: 'F'
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });

      }).catch((err) =>{
          dispatch({type:'CREATE_PROJECT_ERROR',err});
      })
      
    }
  };