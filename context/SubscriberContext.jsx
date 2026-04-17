import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/SubscriberReducer'
import axios from '../helper/Axios'

const SubscriberContext = createContext();

const initialState = {
    loading: false,
    subscribers: [],
    filteredSubscribers: [],
    exist: false,
    success: false,
    unseenSubscriber: 0,
}


const SubscriberProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getSubscribers = () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        axios.get('/getSubscribers')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setFilteredSubscribers = (search) => {
        dispatch({type: 'SET_FILTERED_Subscribers', payload: {search: search, subscribers: state.subscribers}})
    }

    const setSeenStatus = () => {
        axios.get('/setSubscriberSeenStatus')
        .then((res) => {
            if(res.data === 1){
                dispatch({type: 'SET_SEEN_STATUS'})
            }
        })
    }

    const addSubscriber = (email) => {
        const formData = new FormData()
        formData.append('email', email)
        axios.post('/addSubscriber', formData)
        .then((res) => {
            if(res.data === 0){
                dispatch({type: 'EXIST'})
            }else{
                dispatch({type: 'SUCCESS'})
            }
        })
        .catch((error) => {

        })
    }

    useEffect(() => {
        getSubscribers()
    }, [])
    

    return(
        <SubscriberContext.Provider value={{...state, getSubscribers, setFilteredSubscribers, addSubscriber, setSeenStatus}}>
            { children }
        </SubscriberContext.Provider>
    )
}

const useSubscriberContext = () => {
    return useContext(SubscriberContext)
}

export {useSubscriberContext, SubscriberContext, SubscriberProvider}