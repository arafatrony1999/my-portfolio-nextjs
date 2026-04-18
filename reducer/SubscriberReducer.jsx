const SubscriberReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            subscribers: [],
            filteredSubscribers: [],
            exist: false,
            success: false,
            unseenSubscriber: 0,
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            subscribers: action.payload,
            filteredSubscribers: action.payload,
            exist: false,
            success: false,
            unseenSubscriber: action.payload.length
        }
    }

    if(action.type === 'SET_FILTERED_SUBSCRIBERS'){
        const { search, subscribers } = action.payload;
        
        let result = subscribers.filter(single_data => {
            return single_data.email.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredSubscribers: result,
            exist: false,
            success: false,
        }
    }

    if(action.type === 'SET_SEEN_STATUS'){
        return{
            ...state,
            unseenSubscriber: 0,
        }
    }

    if(action.type === 'EXIST'){
        return{
            ...state,
            exist: true,
            success: false,
        }
    }

    if(action.type === 'SUCCESS'){
        return{
            ...state,
            exist: false,
            success: true,
        }
    }

    return state;
}

export default SubscriberReducer