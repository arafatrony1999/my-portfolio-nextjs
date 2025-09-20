import { Suspense } from "react";
import HireMeAdd from "../components/HireMeAdd";
import TestimonialSection from "../components/TestimonialSection";
import TestemonialSkeleton from "../components/TestemonialSkeleton";

const Reviews = async () => {
    return (
        <>
            <div className='container'>
                <HireMeAdd />
            </div>

            <Suspense fallback={<TestemonialSkeleton />}>
                <TestimonialSection />
            </Suspense>
            
        </>
    )
}

export default Reviews;
