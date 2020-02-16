
const initState = {
    projects:[
        {title:'Flu',content:'Arlington'},
        {title:'Corona-Virus',content:'Texas'},
        {title:'Virus',content:'Dallas'}
    ]
}
const projectReducers = (state = initState,action) => {

    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created data', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create data error',action.err);
            return state;
        default:
            return state;

                   
    }
    
}

export default projectReducers