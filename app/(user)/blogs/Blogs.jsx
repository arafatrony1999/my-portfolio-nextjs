import ClientSingleBlogSection from "../components/ClientSingleBlogSection";

const BlogsFetch = async (props) => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getCategories', {cache: 'default'});
    const categories = await res.json();
    
    const response = await fetch('https://portfolioapi.arafatrony.com/api/getBlogs', {cache: 'default'});
    const blogs = await response.json();

    return (
        <ClientSingleBlogSection name={props.name} type={props.type} categories={categories} blogs={blogs} />
    )
}

export default BlogsFetch;