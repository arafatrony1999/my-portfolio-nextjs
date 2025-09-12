import BlogsPage from "../../blogs/page";
import HireMeAdd from "../../components/HireMeAdd";
import ProjectsPage from "../../portfolios/page";

const CategoriesPage = async (props) => {

    const params = await props.params;
    const name = await params.name;

    const searchParams = await props.searchParams;
    const type = await searchParams.type;

    return (
        <>
            <div className="container">
                <HireMeAdd />
            </div>

            <BlogsPage categoryPage={true} name={decodeURIComponent(name)} type={type} />
            <ProjectsPage categoryPage={true} name={decodeURIComponent(name)} type={type} />
        </>
    )
}

export default CategoriesPage