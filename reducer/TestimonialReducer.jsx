const TestimonialReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            testimonials: [],
            filteredTestimonials: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            testimonials: action.payload,
            filteredTestimonials: action.payload,
        }
    }

    if(action.type === 'SET_FILTERED_TESTIMONIALS'){
        const { search, testimonials } = action.payload;
        
        let result = testimonials.filter(single_data => {
            return single_data.name.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredTestimonials: result
        }
    }

    return state;
}

export default TestimonialReducer