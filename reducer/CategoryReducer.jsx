const CategoryReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            categories: [],
            filteredCategories: [],
            single_category: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            categories: action.payload,
            filteredCategories: action.payload,
            single_category: [],
        }
    }

    if(action.type === 'SET_FILTERED_CATEGORIES'){
        const { search, categories } = action.payload;
        
        let result = categories.filter(single_data => {
            return single_data.name.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredCategories: result,
            single_category: [],
        }
    }

    if(action.type === 'SET_FILTERED_CATEGORY'){
        const { id, categories } = action.payload;

        let category = categories.filter((cat) => {
            return cat.id === id
        });

        return{
            ...state,
            single_category: category,
        }
    }

    if(action.type === 'SET_FILTERED_ALL_CATEGORY'){
        return{
            ...state,
            single_category: []
        }
    }

    
    if(action.type === 'SET_FILTERED_CATEGORY_BLOG'){
        const { id, categories } = action.payload;

        let category = categories.filter((cat) => {
            return cat.id === id
        });

        return{
            ...state,
            single_category_blog: category,
        }
    }

    if(action.type === 'SET_FILTERED_ALL_CATEGORY_BLOG'){
        return{
            ...state,
            single_category_blog: []
        }
    }

    return state;
}

export default CategoryReducer