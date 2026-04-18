const AdminReducer = (state, action) => {
    if(action.type === 'INITIAL_STATE'){
        return{
            ...state,
            loading: true,
            authentication: false,
            user: [],
            wrong: false,
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            user: action.payload,
            authentication: true,
            wrong: false,
        }
    }

    if(action.type === 'NO_USER_FOUND'){
        return{
            ...state,
            loading: false,
            user: [],
            authentication: false,
            wrong: false,
        }
    }

    if(action.type === 'WRONG_CREDENTIAL'){
        return{
            ...state,
            loading: false,
            user: [],
            authentication: false,
            wrong: true,
        }
    }

    if(action.type === 'LOGOUT'){
        return{
            ...state,
            authentication: false,
            user: [],
            loading: false,
        }
    }

    return state
}

export default AdminReducer