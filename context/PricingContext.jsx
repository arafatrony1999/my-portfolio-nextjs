import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/PricingReducer'
import axios from '../helper/Axios'

const PricingContext = createContext();

const initialState = {
    loading: false,
    pricing: [],
    filteredPricing: [],
}


const PricingProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getPricing = () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        axios.get('/getPricing')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setFilteredPricing = (search) => {
        dispatch({type: 'SET_FILTERED_PRICING', payload: {search: search, pricing: state.pricing}})
    }

    useEffect(() => {
        getPricing()
    }, [])
    

    return(
        <PricingContext.Provider value={{...state, getPricing, setFilteredPricing}}>
            { children }
        </PricingContext.Provider>
    )
}

const usePricingContext = () => {
    return useContext(PricingContext)
}

export {usePricingContext, PricingContext, PricingProvider}
