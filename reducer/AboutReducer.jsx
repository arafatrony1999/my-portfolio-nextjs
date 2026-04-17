const AboutReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            about: [],
            filteredAbout: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            about: action.payload,
            filteredAbout: action.payload,
        }
    }

    if(action.type === 'SET_FILTERED_ABOUT'){
        const { search, about } = action.payload;
        
        let result = about.filter(single_data => {
            return single_data.title.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredAbout: result
        }
    }
    
    return state;
}

export default AboutReducer