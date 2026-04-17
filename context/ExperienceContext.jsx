import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ExperienceReducer'
import axios from '../helper/Axios'

const ExperienceContext = createContext();

const initialState = {
    loading: false,
    experience: [],
    filteredExperience: [],
}


const ExperienceProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getExperience = () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        axios.get('/getExperience')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setFilteredExperience = (search) => {
        dispatch({type: 'SET_FILTERED_EXPERIENCE', payload: {search: search, experience: state.experience}})
    }

    useEffect(() => {
        getExperience()
    }, [])
    

    return(
        <ExperienceContext.Provider value={{...state, getExperience, setFilteredExperience}}>
            { children }
        </ExperienceContext.Provider>
    )
}

const useExperienceContext = () => {
    return useContext(ExperienceContext)
}

export {useExperienceContext, ExperienceContext, ExperienceProvider}
