const ContactReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            contacts: [],
            filteredContacts: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            contacts: action.payload,
            filteredContacts: action.payload,
            unseen: action.payload.filter((a) => {
                return a.seen === 0
            }).length
        }
    }

    if(action.type === 'SET_FILTERED_CONTACTS'){
        const { search, contacts } = action.payload;
        
        let result = contacts.filter(single_data => {
            return single_data.name.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredContacts: result,
        }
    }

    if(action.type === 'SET_SEEN_STATUS'){
        return{
            ...state,
            unseen: 0,
        }
    }

    return state;
}

export default ContactReducer