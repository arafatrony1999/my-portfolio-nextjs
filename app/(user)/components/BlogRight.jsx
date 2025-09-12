import Link from "next/link"

const BlogRight = async (props) => {

    return (
        <div className='w-100'>
            <input type="text" placeholder='Search...' className='w-100 mb-5' />

            <div className="bg-dark text-white p-3 py-2">Categories</div>

            <ul>
                {
                    props.categories.map((category) => {
                        return(
                            <li key={category.id} className=' list-unstyled py-2'>
                                <Link href={`/categories/${category.name}?type=${category.type}`}>{category.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>

            
            <div className="bg-dark text-white p-3 py-2">Recent Articles</div>
            <ul>
                {
                    props.blogs.map((blog) => {
                        return(
                            <li key={blog.id} className=' list-unstyled py-2'>
                                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BlogRight