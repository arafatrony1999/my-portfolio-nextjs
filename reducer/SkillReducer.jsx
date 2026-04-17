const SkillReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            skills: [],
            filteredSkills: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            skills: action.payload,
            filteredSkills: action.payload,
        }
    }

    if(action.type === 'SET_FILTERED_SKILLS'){
        const { search, skills } = action.payload;
        
        let result = skills.filter(single_data => {
            return single_data.name.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredSkills: result
        }
    }

    return state;
}

export default SkillReducer