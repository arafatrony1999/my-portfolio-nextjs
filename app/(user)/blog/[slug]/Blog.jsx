import BlogComments from "../../components/BlogComments";
import BlogRight from "../../components/BlogRight";
import FullBlog from "../../components/FullBlog";
import BlogArrow from "../../components/BlogArrow";
import Share from "../../components/Share";

const Blog = async (props) => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getCategories', {cache: 'default'});
    const categories = await res.json();

    const response = await fetch(`https://portfolioapi.arafatrony.com/api/blog?slug=${props.slug}`, {cache: 'default'});
    const blogs = await response.json();
    const blog = blogs[0];

    const res2 = await fetch('https://portfolioapi.arafatrony.com/api/getBlogs', {cache: 'default'});
    const all_blogs = await res2.json();

    return(
        <>
            <div className="row">
                <div className="col-12 col-md-8">
                    <FullBlog blog={blog} />
                    <Share />
                    <BlogArrow blogs={all_blogs} currentBlog={blog} />
                    { blog && <BlogComments singleBlog={blog} />}
                </div>
                <div className="col-12 col-md-4">
                    <BlogRight categories={categories} blogs={all_blogs} />
                </div>
            </div>
        </>
    )
}

export default Blog;