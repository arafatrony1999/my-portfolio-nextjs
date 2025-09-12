import BigText from "../components/BigText";
import ClientSinglePortfolioSection from "../components/ClientSinglePortfolioSection";
import HireMeAdd from "../components/HireMeAdd";


const Portfolios = async (props) => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getCategories', {cache: 'default'});
    const categories = await res.json();

    
    const response = await fetch('https://portfolioapi.arafatrony.com/api/getPortfolios', {cache: 'default'});
    const portfolios = await response.json();

    return (
        <div className='container min-height'>
            {!props.categoryPage && <HireMeAdd />}
            <BigText big='PORTFOLIO' normal='RESENT' colored='WORKS' />

            <ClientSinglePortfolioSection name={props.name} type={props.type} categories={categories} portfolios={portfolios} />
        </div>
    )
}

export default Portfolios;
