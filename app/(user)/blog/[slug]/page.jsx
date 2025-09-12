import BlogArrow from "../../components/BlogArrow";
import BlogComments from "../../components/BlogComments";
// import BlogComments from "../../components/BlogComments";
import BlogRight from "../../components/BlogRight";
import ContactSection from "../../components/ContactSection";
import FullBlog from "../../components/FullBlog";
import HireMeAdd from "../../components/HireMeAdd";
import Share from "../../components/Share";
import SubscriberSection from "../../components/SubscriberSection";

const SingleBlog = async (props) => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getCategories', {cache: 'default'});
    const categories = await res.json();

    const params = await props.params;
    const slug = await params.slug;
    const response = await fetch(`https://portfolioapi.arafatrony.com/api/blog?slug=${slug}`, {cache: 'default'});
    const blogs = await response.json();
    const blog = blogs[0];

    const res2 = await fetch('https://portfolioapi.arafatrony.com/api/getBlogs', {cache: 'default'});
    const all_blogs = await res2.json();

    return (
        <div className='container-fluid'>
            <div className="container">
                <HireMeAdd />

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
            </div>

            <SubscriberSection />
            <ContactSection />
        </div>

    )
}

export default SingleBlog