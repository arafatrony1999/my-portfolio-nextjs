import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/BlogReducer'
import axios from '../helper/Axios'
import { useAdminContext } from './AdminContext'

const BlogContext = createContext()

const initialState = {
    loading: false,
    blogs: [],
    filteredBlogs: [],
    singleBlog: null,
    commentReplyId: '',
    commentSuccess: false,
    replySuccess: false,
}

const BlogProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { authentication } = useAdminContext()

    const getBlogs = async () => {
        dispatch({type: 'SET_INITIAL_STATUS'})
        await axios.get('/getBlogs')
        .then((res) => {
            dispatch({type: 'API_DATA', payload: res.data})
        })
        .catch((error) => {

        })
    }

    const setSingleBlog = async (slug) => {
        await axios.get(`/blog?slug=${slug}`)
        .then((res) => {
            if(res.data !== 0){
                dispatch({type: 'SET_SINGLE_BLOG', payload: res.data})
            }
        })
        .catch((error) => {

        })
    }

    const addComment = (blog, name, email, comment) => {
        const formData = new FormData()

        formData.append('id', blog.id)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('comment', comment)
        formData.append('author', authentication ? 1 : 0)

        axios.post('/addComment', formData)
        .then((res) => {
            if(res.data === 1){
                setSingleBlog(blog.slug)
                dispatch({type: 'SET_COMMENT_SUCCESS'})
            }
        })
        .catch((error) => {

        })
    }

    const addReply = (comment, name, email, reply, slug) => {
        const formData = new FormData()

        formData.append('id', comment.id)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('reply', reply)
        formData.append('author', authentication ? 1 : 0)

        axios.post('/addReply', formData)
        .then((res) => {
            if(res.data === 1){
                setSingleBlog(slug)
                dispatch({type: 'SET_REPLY_SUCCESS'})
            }
        })
        .catch((error) => {

        })
    }

    const setCommentReplyId = (id) => {
        if(state.commentReplyId === id){
            dispatch({type: 'UNSET_COMMENT_REPLY_ID'})
        }else{
            dispatch({type: 'SET_COMMENT_REPLY_ID', payload: id})
        }
    }

    const setFilteredBlogs = (search) => {
        dispatch({type: 'SET_FILTERED_BLOGS', payload: {search: search, blogs: state.blogs}})
    }

    useEffect(() => {
        getBlogs()
    }, [])


    return(
        <BlogContext.Provider value={{...state, getBlogs, setFilteredBlogs, setSingleBlog, addComment, addReply, setCommentReplyId}}>
            {children}
        </BlogContext.Provider>
    )
}

const useBlogContext = () => {
    return useContext(BlogContext)
}

export { useBlogContext, BlogContext, BlogProvider }