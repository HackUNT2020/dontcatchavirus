  
const initState = {
    projects: [
      {id: '1', title: 'VIRUS A', content: 'blah blah blah'},
      {id: '2', title: 'VIRUS B', content: 'blah blah blah'},
      {id: '3', title: 'VIRUS C', content: 'blah blah blah'}
    ]
  }
  
  const projectReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_PROJECT':
        console.log('create project', action.project);
    }
    return state;
  };
  
  export default projectReducer;
  