const pricingReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            pricing: [],
            filteredPricing: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            pricing: action.payload,
            filteredPricing: action.payload,
        }
    }

    if(action.type === 'SET_FILTERED_PRICING'){
        const { search, pricing } = action.payload;
        
        let result = pricing.filter(single_data => {
            return single_data.title.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredPricing: result
        }
    }

    return state;
}

export default pricingReducer