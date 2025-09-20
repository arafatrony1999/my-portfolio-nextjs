import { Suspense } from "react";
import BigText from "../components/BigText";
import HireMeAdd from "../components/HireMeAdd";
import BlogsFetch from "./Blogs";
import BlogsSkeleton from "../components/BlogsSkeleton";

const Blogs = async (props) => {

    return (
        <>
            <div className='container min-height'>
                {!props.categoryPage && <HireMeAdd />}
                
                <BigText big='ARTICLES' normal='NEW BLOGS &' colored='INSIGHTS' />

                <Suspense fallback={<BlogsSkeleton />}>
                    <BlogsFetch name={props.name} type={props.type} />
                </Suspense>
            </div>
        </>
    )
}

export default Blogs;
