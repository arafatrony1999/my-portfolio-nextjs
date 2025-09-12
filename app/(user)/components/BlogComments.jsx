'use client'

import React, { useState } from 'react'
import formal from '@/public/images/formal.jpg'
// import ReplyComment from './ReplyComment'
import { BsArrowReturnRight } from "react-icons/bs";
import DateFormat from './DateFormat';
import { toast } from 'react-toastify';
import Image from 'next/image';

const BlogComments = (props) => {
    const singleBlog = props.singleBlog;
    // const { setCommentReplyId, commentReplyId } = useBlogContext()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

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
        }
        else{
            const commentData = {
                name,
                email,
                comment,
                slug: singleBlog.slug
            }
            postComment(commentData)
            
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
        }
    }

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
                                        <Image className='rounded-circle' width={40} height={40} src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' alt="avatar" />
                                        <div className='d-flex m-auto'>
                                            <h4 className='px-3'>{comment.name}</h4>
                                        </div>
                                    </div>
                                    <p>
                                        <DateFormat date={comment.created_at} />
                                    </p>
                                </div>

                                <p className='py-3'>{comment.comment}</p>

                                <button onClick={() => setCommentReplyId(comment.id)} className='btn' style={{marginBottom: '20px'}}>Reply</button>
{/*                                 
                                {
                                    commentReplyId === comment.id && <ReplyComment slug={singleBlog.slug} comment={comment} />
                                } */}
                                
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
                                                                <img className='rounded-circle' width={40} height={40} src={reply.author ? formal : 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'} alt="" />
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

                <form className="">
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
}

export default BlogComments