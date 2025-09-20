import { Suspense } from "react";
import GetServicePage from "../components/GetServicePage";
import HireMeAdd from "../components/HireMeAdd";
import ServicesSection from "../components/ServicesSection";
import ServiceSkeleton from "../components/ServiceSkeleton";

const Services = async () => {
    return (
        <>
            <div className='container'>
                <HireMeAdd />
            </div>

            <Suspense fallback={<ServiceSkeleton />}>
                <ServicesSection />

                <GetServicePage />
            </Suspense>
        </>
    )
}

export default Services;
