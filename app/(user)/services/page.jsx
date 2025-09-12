import GetServicePage from "../components/GetServicePage";
import HireMeAdd from "../components/HireMeAdd";
import ServicesSection from "../components/ServicesSection";

const Services = async () => {
    return (
        <>
            <div className='container'>
                <HireMeAdd />
            </div>

            <ServicesSection />

            <GetServicePage />
        </>
    )
}

export default Services;
