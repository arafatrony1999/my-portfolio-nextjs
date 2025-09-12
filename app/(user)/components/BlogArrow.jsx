'use client'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";

const BlogArrow = (props) => {
    const blogs = props.blogs;

    const [previous, setPrevious] = useState(null);
    const [next, setNext] = useState(null);

    useEffect(() => {
        if(blogs){
            if(props.currentBlog){
                const currentIndex = blogs.findIndex(item => item.id === props.currentBlog.id);

                if (currentIndex > -1) {
                    setPrevious(blogs[currentIndex - 1]);
                }else{
                    setPrevious(null)
                }

                if (currentIndex < blogs.length - 1) {
                    setNext(blogs[currentIndex + 1]);
                }else{
                    setNext(null)
                }
            }else{
                console.log('no props')
            }
        }else{
            console.log('no blogs')
        }
    }, [props.currentBlog, blogs]);

    return (
        <div className="d-flex justify-content-between align-items-center py-3">
            <Link href={`/blog/${previous && previous.slug}`} className={`d-flex blog-arrow ${previous ? '' : 'd-none'}`}>
                <div className="arrow-icon">
                    <FaArrowLeft />
                </div>
                <div className="px-2">
                    <p className="py-0 my-0">Previous</p>
                    <span>{previous ? previous.title : "None"}</span>
                </div>
            </Link>
            <Link href={`/blog/${next && next.slug}`} className={`d-flex blog-arrow ${next ? '' : 'd-none'}`}>
                <div className="px-2">
                    <p className="py-0 my-0">Next</p>
                    <span>{next ? next.title : "None"}</span>
                </div>
                <div className="arrow-icon">
                    <FaArrowRight />
                </div>
            </Link>
        </div>
    )
}

export default BlogArrow