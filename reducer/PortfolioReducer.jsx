const PortFolioReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            portfolios: [],
            filteredPortfolios: [],
        }
    }

    if(action.type === 'API_DATA'){
        let a = action.payload.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.name === value.name
            ))
        )
        return{
            ...state,
            loading: false,
            portfolios: action.payload,
            filteredPortfolios: action.payload,
            all_portfolios: a
        }
    }

    if(action.type === 'SET_FILTERED_PORTFOLIOS'){
        const { search, portfolios } = action.payload;
        
        let result = portfolios.filter(single_data => {
            return single_data.name.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredPortfolios: result
        }
    }

    if(action.type === 'SET_SINGLE_PORTFOLIO'){
        return{
            ...state,
            singlePortfolio: action.payload[0]
        }
    }

    return state;
}

export default PortFolioReducer