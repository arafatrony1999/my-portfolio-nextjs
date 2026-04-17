const BlogReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            blogs: [],
            filteredBlogs: [],
            commentSuccess: false,
            replySuccess: false,
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            blogs: action.payload,
            filteredBlogs: action.payload,
            commentSuccess: false,
            replySuccess: false,
        }
    }

    if(action.type === 'SET_FILTERED_BLOGS'){
        const { search, blogs } = action.payload;
        
        let result = blogs.filter(single_data => {
            return single_data.title.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredBlogs: result,
            commentSuccess: false,
            replySuccess: false,
        }
    }

    if(action.type === 'SET_SINGLE_BLOG'){
        return{
            ...state,
            singleBlog: action.payload[0],
            commentSuccess: false,
            replySuccess: false,
        }
    }

    if(action.type === 'SET_COMMENT_REPLY_ID'){
        return{
            ...state,
            commentReplyId: action.payload,
            commentSuccess: false,
            replySuccess: false,
        }
    }

    if(action.type === 'UNSET_COMMENT_REPLY_ID'){
        return{
            ...state,
            commentReplyId: '',
            commentSuccess: false,
            replySuccess: false,
        }
    }

    if(action.type === 'SET_COMMENT_SUCCESS'){
        return{
            ...state,
            commentSuccess: true,
            replySuccess: false,
        }
    }
    
    if(action.type === 'SET_REPLY_SUCCESS'){
        return{
            ...state,
            commentSuccess: false,
            replySuccess: true,
        }
    }

    return state;
}

export default BlogReducer