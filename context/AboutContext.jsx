'use client'
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/AboutReducer'

const AboutContext = createContext()

const initialState = {
    loadingAbout: false,
    about: [],
    filteredAbout: [],
}

const AboutProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const getAbout = () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        fetch('https://portfolioapi.arafatrony.com/api/getAbout')
        .then((res) => {
            return res.json()
        })
        .then(data => {
            dispatch({type: 'API_DATA', payload: data})
        })
        .catch((error) => {

        })
    } 

    const setFilteredAbout = (search) => {
        dispatch({type: 'SET_FILTERED_ABOUT', payload: {search: search, about: state.about}})
    }

    useEffect(() => {
        getAbout()
    }, [])

    return(
        <AboutContext.Provider value={{...state, getAbout, setFilteredAbout}}>
            {children}
        </AboutContext.Provider>
    )
}

const useAboutContext = () => {
    return useContext(AboutContext)
}

export { useAboutContext, AboutContext, AboutProvider }