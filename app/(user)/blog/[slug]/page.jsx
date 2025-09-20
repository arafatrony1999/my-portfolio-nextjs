import { Suspense } from "react";
import ContactSection from "../../components/ContactSection";
import HireMeAdd from "../../components/HireMeAdd";
import SubscriberSection from "../../components/SubscriberSection";
import BlogSkeleton from "../../components/BlogSkeleton";
import Blog from "./Blog";
 
export async function generateMetadata({ params }) {
    const slug = (await params).slug
    
    // fetch post information
    const getPost = await fetch(`https://portfolioapi.arafatrony.com/api/blog?slug=${slug}`)
    .then((res) =>
        res.json()
    )

    const post = getPost[0];
    
    return {
        title: post.title,
        description: post.meta_description,
        openGraph: {
            title: post.title,
            description: post.meta_description,
            url: `https://arafatrony.com/blog/${slug}`,
            type: "article",
            images: [
                {
                    url: post.image, // dynamically fetched OG image
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.meta_description,
            images: [post.image],
        },
    };
}

const SingleBlog = async (props) => {
    
    const params = await props.params;
    const slug = await params.slug;

    return (
        <div className='container-fluid'>
            <div className="container">
                <HireMeAdd />

                <Suspense fallback={<BlogSkeleton />}>
                    <Blog slug={slug} />
                </Suspense>
            </div>

            <SubscriberSection />
            <ContactSection />
        </div>

    )
}

export default SingleBlog