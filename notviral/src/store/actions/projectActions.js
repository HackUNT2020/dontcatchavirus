export const createProject =(project) => {
    return (dispatch, getState, {getFirebase,getFirestore}) => {
        
        // make asynchronous call to databse from here
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({

            ...project,
            authorFirstName: 'ashna',
            authorLastName: 'ansar',
            authorId: '12',
            createdAt: new Date()

        }).then(()=>{
            dispatch({type:'CREATE_PROJECT_SUCCESS'});

        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR'},err);

        });                
        
        
        
    }
    
};