import BigText from "../components/BigText";
import ClientSingleBlogSection from "../components/ClientSingleBlogSection";
import HireMeAdd from "../components/HireMeAdd";

const Blogs = async (props) => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getCategories', {cache: 'default'});
    const categories = await res.json();
    
    const response = await fetch('https://portfolioapi.arafatrony.com/api/getBlogs', {cache: 'default'});
    const blogs = await response.json();

    return (
        <>
            <div className='container min-height'>
                {!props.categoryPage && <HireMeAdd />}
                
                <BigText big='ARTICLES' normal='NEW BLOGS &' colored='INSIGHTS' />

                <ClientSingleBlogSection name={props.name} type={props.type} categories={categories} blogs={blogs} />
            </div>
        </>
    )
}

export default Blogs;
