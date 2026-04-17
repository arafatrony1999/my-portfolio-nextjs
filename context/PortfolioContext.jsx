import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/PortfolioReducer'
import axios from '../helper/Axios'

const PortfolioContext = createContext();

const initialState = {
    loading: false,
    portfolios: [],
    filteredPortfolios: [],
    all_portfolios: [],
    singlePortfolio: {},
}


const PortfolioProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getPortfolios = () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        axios.get('/getPortfolios')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setFilteredPortfolios = (search) => {
        dispatch({type: 'SET_FILTERED_PORTFOLIOS', payload: {search: search, portfolios: state.portfolios}})
    }

    const setSinglePortfolio = async (id) => {
        await axios.get(`/portfolio?id=${id}`)
        .then((res) => {
            if(res.data !== 0){
                dispatch({type: 'SET_SINGLE_PORTFOLIO', payload: res.data})
            }
        })
        .catch((error) => {

        })
    }

    useEffect(() => {
        getPortfolios()
    }, [])
    

    return(
        <PortfolioContext.Provider value={{...state, getPortfolios, setFilteredPortfolios, setSinglePortfolio}}>
            { children }
        </PortfolioContext.Provider>
    )
}

const usePortfolioContext = () => {
    return useContext(PortfolioContext)
}

export {usePortfolioContext, PortfolioContext, PortfolioProvider}