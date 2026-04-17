import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/TestimonialReducer'
import axios from '../helper/Axios'

const TestimonialContext = createContext();

const initialState = {
    loading: false,
    testimonials: [],
    filteredTestimonials: []
}


const TestimonialProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getTestimonials = () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        axios.get('/getTestimonials')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setFilteredTestimonials = (search) => {
        dispatch({type: 'SET_FILTERED_TESTIMONIALS', payload: {search: search, testimonials: state.testimonials}})
    }

    useEffect(() => {
        getTestimonials()
    }, [])
    

    return(
        <TestimonialContext.Provider value={{...state, getTestimonials, setFilteredTestimonials}}>
            { children }
        </TestimonialContext.Provider>
    )
}

const useTestimonialContext = () => {
    return useContext(TestimonialContext)
}

export {useTestimonialContext, TestimonialContext, TestimonialProvider}