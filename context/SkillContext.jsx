import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/SkillReducer'
import axios from '../helper/Axios'

const SkillContext = createContext();

const initialState = {
    loading: false,
    skills: [],
    filteredSkills: []
}


const SkillProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getSkills = () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        axios.get('/getSkills')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setFilteredSkills = (search) => {
        dispatch({type: 'SET_FILTERED_SKILLS', payload: {search: search, skills: state.skills}})
    }

    useEffect(() => {
        getSkills()
    }, [])
    

    return(
        <SkillContext.Provider value={{...state, getSkills, setFilteredSkills}}>
            { children }
        </SkillContext.Provider>
    )
}

const useSkillContext = () => {
    return useContext(SkillContext)
}

export {useSkillContext, SkillContext, SkillProvider}