"use client"

import { useEffect, useState} from 'react'
import Link from 'next/link';
import DateFormat from './DateFormat';

export default function ClientSingleBlogSection(props) {

    const [categories, setCategories] = useState([]);
    const [all_blogs, setAllBlogs] = useState([]);
    const [single_category, setSingleCategory] = useState([]);

    const setFilteredCategory = function(id){
        if(id === 0){
            setSingleCategory([]);
        }else{
            setSingleCategory(categories.filter((category) => {
                return category.id === id
            }));
        }
    }

    useEffect(() => {
        setCategories(props.categories);

        const uniqueArray = props.blogs.filter((obj, index, self) =>
            index === self.findIndex((t) => t.slug === obj.slug)
        );

        setAllBlogs(uniqueArray);
    }, [])

    useEffect(() => {
        if(props.name && props.type){
            const x = props.categories.filter((category) => {
                return category.name === props.name && category.type === props.type
            });

            setSingleCategory(x);
        }
    }, [props.name, props.type])

    return (
        <>
            <div className='container my-5'>

                <div className="blogs-categories bg-dark mt-5 text-center d-flex flex-wrap py-2 justify-content-center">
                    <button className={`h5 px-3 ${single_category.length === 0 ? 'text-danger' : 'text-white'}`} onClick={() => setFilteredCategory(0)}>All</button>
                    {
                        categories.filter((category) => {
                            return category.type === 'blog'
                        }).map((category, index) => {
                            return(
                                <button className={`h5 px-3 ${single_category.length !== 0 && single_category[0].id === category.id ? 'text-danger' : 'text-white'}`} key={index} onClick={() => setFilteredCategory(category.id)}>{category.name}</button>
                            )
                        })
                    }
                </div>


                
                <div className="services-cards w-100 d-flex justify-content-between flex-wrap pt-5 mb-5">
                    {
                        single_category.length !== 0 ?
                        single_category[0].blogs.length !== 0 ?
                        single_category[0].blogs.map((blog, index) => {
                            return(
                                <div key={index} className="blogs-card blog-page-card mb-3">
                                    <div className="blog-image">
                                        <img className='img-fluid' src={blog.image} alt="" />
                                    </div>
                                    <div className="p-3 pb-0">
                                        <div className="blog-title">
                                            <h5>
                                                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                            </h5>
                                        </div>

                                        <p className='py-3'>
                                            {blog.meta_description.slice(0, 100)}...
                                        </p>

                                        <p>
                                            🕒
                                            <span className="px-1"></span>
                                            <DateFormat date={blog.created_at} />
                                        </p>
                                    </div>
                                </div>
                            )
                        }) : <h3 className='w-100 text-center text-danger'>No blog available for this category!</h3> : all_blogs.map((blog, index) => {
                            return(
                                <div key={index} className="blogs-card blog-page-card mb-3">
                                    <div className="blog-image">
                                        <img className='img-fluid' src={blog.image} alt="" />
                                    </div>
                                    <div className="p-3 pb-0">
                                        <div className="blog-title">
                                            <h5>
                                                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                            </h5>
                                        </div>

                                        <p className='py-3'>
                                            {blog.meta_description.slice(0, 100)}...
                                        </p>

                                        <p>
                                            🕒
                                            <span className="px-1"></span>
                                            <DateFormat date={blog.created_at} />
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="service-card"></div>
                    <div className="service-card"></div>

                </div>
            </div>
        </>
    )
}
