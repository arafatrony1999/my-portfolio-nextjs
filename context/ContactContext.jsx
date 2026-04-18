import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ContactReducer'
import axios from '../helper/Axios'

const ContactContext = createContext()

const initialState = {
    loading: false,
    contacts: [],
    filteredContacts: [],
    unseen: 0,
}

const ContactProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getContacts = async () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        await axios.get('/getContacts')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }
    
    const setFilteredContacts = (search) => {
        dispatch({type: 'SET_FILTERED_CONTACTS', payload: {search: search, contacts: state.contacts}})
    }

    const setSeenStatus = () => {
        axios.get('/setSeenStatus')
        .then((res) => {
            if(res.data === 1){
                dispatch({type: 'SET_SEEN_STATUS'})
            }
        })
    }

    useEffect(() => {
        getContacts()
    }, [])

    return(
        <ContactContext.Provider value={{...state, getContacts, setFilteredContacts, setSeenStatus }}>
            {children}
        </ContactContext.Provider>
    )
}

const useContactContext = () => {
    return useContext(ContactContext)
}

export { useContactContext, ContactContext, ContactProvider }