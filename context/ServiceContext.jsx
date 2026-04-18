import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ServiceReducer'
import axios from '../helper/Axios'

const ServiceContext = createContext()

const initialState = {
    loading: false,
    services: [],
    filteredServices: [],
    unseenService: 0,
}

const ServiceProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getServices = async () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        await axios.get('/getService')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }
    
    const setFilteredServices = (search) => {
        dispatch({type: 'SET_FILTERED_SERVICES', payload: {search: search, services: state.services}})
    }

    const setSeenStatus = () => {
        axios.get('/setServiceSeenStatus')
        .then((res) => {
            if(res.data === 1){
                dispatch({type: 'SET_SEEN_STATUS'})
            }
        })
    }

    useEffect(() => {
        getServices()
    }, [])

    return(
        <ServiceContext.Provider value={{...state, getServices, setFilteredServices, setSeenStatus }}>
            {children}
        </ServiceContext.Provider>
    )
}

const useServiceContext = () => {
    return useContext(ServiceContext)
}

export { useServiceContext, ServiceContext, ServiceProvider }