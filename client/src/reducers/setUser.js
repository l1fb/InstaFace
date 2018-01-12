const initialState = {
    user: {name: '', email: '', user_ID: ''}
}

function setUser(state = initialState, action) {
    switch (action.type) { 
        case 'CHANGE_NAME':
            return action.payload;
            break;  
    }
    return state; 
}



export default setUser; 
