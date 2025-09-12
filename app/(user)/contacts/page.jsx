import ContactSection from "../components/ContactSection";
import HireMeAdd from "../components/HireMeAdd";

const Contacts = async () => {
    return (
        <>
            <div className='container'>
                <HireMeAdd />
            </div>

            <ContactSection />
        </>
    )
}

export default Contacts;
