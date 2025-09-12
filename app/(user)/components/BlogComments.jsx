'use client'

import React, { useEffect, useState } from 'react'
import avatar from '@/public/images/avatar.jpg'
import { BsArrowReturnRight } from "react-icons/bs";
import DateFormat from './DateFormat';
import { toast } from 'react-toastify';
import Image from 'next/image';

const BlogComments = (props) => {
    const [state, setState] = useState(false);
    const [singleBlog, setSingleBlog] = useState([])

    const getSignleBlog = async () => {
        const res = await fetch(`https://portfolioapi.arafatrony.com/api/blog?slug=${props.singleBlog.slug}`)
        const data = await res.json();

        setSingleBlog(data[0])
    }

    useEffect(() => {
        getSignleBlog();
    }, [state, setState])

    const [commentReplyId, setCommentReplyId] = useState(null);

    const setCommentReplyIdFunction = (id) => {
        if(commentReplyId === id){
            setCommentReplyId(null)
        }else{
            setCommentReplyId(id)
        }
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const [replyName, setReplyName] = useState('')
    const [replyEmail, setReplyEmail] = useState('')
    const [reply, setReply] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!name || !email || !comment){
            toast.error('Please fill all the fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }else{
            fetch(`https://portfolioapi.arafatrony.com/api/addComment`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: singleBlog.id,
                    name: name,
                    email: email,
                    comment: comment,
                    author: 0,
                }),
            })
            .then(res => res.json())
            .then(data => {
                if(data === 1){
                    toast.success('Comment Submitted!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                    setName('')
                    setEmail('')
                    setComment('')

                    setState(!state)
                }else{
                    toast.error("Something went wrong! Please try again.", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
        }
    }

    const addReply = (e) => {
        e.preventDefault()

        fetch(`https://portfolioapi.arafatrony.com/api/addReply`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: commentReplyId,
                name: replyName,
                email: replyEmail,
                reply: reply,
                author: 0,
            }),
        })
        .then(res => res.json())
        .then(data => {
            if(data === 1){
                toast.success('Reply Submitted!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setReplyName('')
                setReplyEmail('')
                setReply('')
                setState(!state)
            }else{
                toast.error("Something went wrong! Please try again.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        })
        .catch((error) => {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
    }

    if(singleBlog.id){
        return (
            <>
                <h1>{singleBlog.comments.length} Comments</h1>

                <div className="comments">
                    {
                        singleBlog.comments.map((comment, index) => {
                            return(
                                <div key={index} className="single-comment my-3 border-bottom py-2">
                                    <div className="d-flex justify-content-between">
                                        <div className='d-flex'>
                                            <Image className='rounded-circle' width={40} height={40} src={avatar} alt="avatar" />
                                            <div className='d-flex m-auto'>
                                                <h4 className='px-3'>{comment.name}</h4>
                                            </div>
                                        </div>
                                        <p>
                                            <DateFormat date={comment.created_at} />
                                        </p>
                                    </div>

                                    <p className='py-3'>{comment.comment}</p>

                                    <button onClick={() => setCommentReplyIdFunction(comment.id)} className='btn btn-light' style={{marginBottom: '20px'}}>Reply</button>
                                    {
                                        commentReplyId === comment.id && (
                                            <div className='reply-comment py-3'>
                                                <h2>Reply to {comment.name}'s comment</h2>
                                                <p>Your email address will not be published. Required fields are marked *</p>

                                                <form onSubmit={(e) => addReply(e)} className="">
                                                    <div className="mb-3">
                                                        <label className="form-label">Name *</label>
                                                        <input value={replyName} onChange={(e) => setReplyName(e.target.value)} placeholder="Enter your name" type="text" className="form-control" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Email *</label>
                                                        <input value={replyEmail} onChange={(e) => setReplyEmail(e.target.value)} placeholder="Enter your email" type="email" className="form-control" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Reply *</label>
                                                        <textarea value={reply} onChange={(e) => setReply(e.target.value)} rows="3" placeholder="Write your reply here..." className="form-control"></textarea>
                                                    </div>
                                                    <button type="submit" className="py-1 px-2 colored-btn">Post Reply</button>
                                                </form>
                                            </div>
                                        )
                                    }
                                    
                                    <div style={{paddingLeft: '10px'}}>
                                        {
                                            comment.replies.map((reply, index) => {
                                                return(
                                                    <div key={index} className='d-flex my-3'>
                                                        <div className='position-relative top-50' style={{fontSize: '20px'}}>
                                                            <BsArrowReturnRight />
                                                        </div>
                                                        <div key={index} className="single-comment" style={{paddingLeft: '20px'}}>
                                                            <div className="d-flex justify-content-between">
                                                                <div className='d-flex'>
                                                                    <Image className='rounded-circle' width={40} height={40} src={avatar} alt="avatar" />
                                                                    <div className='d-flex m-auto'>
                                                                        <h4 className='px-3'>{reply.name}</h4>
                                                                    </div>
                                                                </div>
                                                                <p>
                                                                    <DateFormat date={reply.created_at} />
                                                                </p>
                                                            </div>
                                                            <p className='py-3'>{reply.replies}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                
                <div className='reply-comment py-3'>
                    <h2>Leave a comment : </h2>

                    <p>Your email address will not be published. Required fields are marked *</p>

                    <form onSubmit={(e) => onSubmit(e)} className="">
                        <div className="mb-3">
                            <label className="form-label">Name *</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email *</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Comment *</label>
                            <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows="3" placeholder="Write your comment here..." className="form-control"></textarea>
                        </div>
                        <button type="submit" className="py-1 px-2 colored-btn">Post Comment</button>
                    </form>
                </div>
            </>
        )
    }else{
        return <h1>Loading...</h1>
    }
}

export default BlogComments