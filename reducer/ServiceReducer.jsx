const ServiceReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            services: [],
            filteredServices: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            services: action.payload,
            filteredServices: action.payload,
            unseenService: action.payload.filter((a) => {
                return a.seen === 0
            }).length
        }
    }

    if(action.type === 'SET_FILTERED_SERVICES'){
        const { search, services } = action.payload;
        
        let result = services.filter(single_data => {
            return single_data.name.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredServices: result,
        }
    }

    if(action.type === 'SET_SEEN_STATUS'){
        return{
            ...state,
            unseenService: 0,
        }
    }

    return state;
}

export default ServiceReducer