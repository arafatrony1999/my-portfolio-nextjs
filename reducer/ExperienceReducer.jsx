const ExperienceReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            experience: [],
            filteredExperience: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            experience: action.payload,
            filteredExperience: action.payload,
        }
    }

    if(action.type === 'SET_FILTERED_EXPERIENCE'){
        const { search, experience } = action.payload;
        
        let result = experience.filter(single_data => {
            return single_data.company.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredExperience: result
        }
    }

    return state;
}

export default ExperienceReducer