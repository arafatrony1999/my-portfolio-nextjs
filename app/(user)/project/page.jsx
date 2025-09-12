import ContactSection from "../components/ContactSection";
import FullPortfolio from "../components/FullPortfolio";
import HireMeAdd from "../components/HireMeAdd";
import PortfolioRight from "../components/PortfolioRight";
import SubscriberSection from "../components/SubscriberSection";

const ProjectPage = async (props) => {
    const searchParam = await props.searchParams;

    const res = await fetch(`https://portfolioapi.arafatrony.com/api/portfolio?id=${searchParam.id}`, {cache: 'no-store'});
    const data = await res.json();
    const project = data[0];

    console.log(project)

    return (
        <div className='container-fluid'>
            <div className="container">
                <HireMeAdd />

                <div className="row">
                    <div className="col-12 col-md-8 py-2">
                        <FullPortfolio portfolio={project} />
                    </div>
                    <div className="col-12 col-md-4 py-2">
                        <PortfolioRight />
                    </div>
                </div>
            </div>

            <SubscriberSection />
            <ContactSection />
        </div>

    )
}

export default ProjectPage;