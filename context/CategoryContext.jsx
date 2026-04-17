import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CategoryReducer'
import axios from '../helper/Axios'

const CategoryContext = createContext()

const initialState = {
    loading: false,
    categories: [],
    filteredCategories: [],
    single_category: [],
    single_category_blog: [],
}

const CategoryProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getCategories = async () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        await axios.get('/getCategories')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setFilteredCategories = (search) => {
        dispatch({type: 'SET_FILTERED_CATEGORIES', payload: {search: search, categories: state.categories}})
    }

    const setFilteredCategory = (id) => {
        if(id === 0){
            dispatch({type: 'SET_FILTERED_ALL_CATEGORY' })
        }else{
            dispatch({type: 'SET_FILTERED_CATEGORY', payload: { id: id, categories: state.categories }})
        }
    }

    const setFilteredCategoryBlog = (id) => {
        if(id === 0){
            dispatch({type: 'SET_FILTERED_ALL_CATEGORY_BLOG' })
        }else{
            dispatch({type: 'SET_FILTERED_CATEGORY_BLOG', payload: { id: id, categories: state.categories }})
        }
    }

    useEffect(() => {
        getCategories()
    }, [])


    return(
        <CategoryContext.Provider value={{...state, getCategories, setFilteredCategories, setFilteredCategory, setFilteredCategoryBlog}}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategoryContext = () => {
    return useContext(CategoryContext)
}

export { useCategoryContext, CategoryContext, CategoryProvider }