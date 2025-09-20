import { Suspense } from "react";
import HireMeAdd from "../components/HireMeAdd";
import PricingSection from "../components/PricingSection";
import PricingSkeleton from "../components/PricingSkeleton";

const Pricing = async () => {
    return (
        <>
            <div className='container'>
                <HireMeAdd />
            </div>

            <Suspense fallback={ <PricingSkeleton /> }>
                <PricingSection />
            </Suspense>
        </>
    )
}

export default Pricing;
