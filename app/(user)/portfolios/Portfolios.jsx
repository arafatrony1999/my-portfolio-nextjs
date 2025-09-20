import ClientSinglePortfolioSection from "../components/ClientSinglePortfolioSection";

const Portfoliosx = async (props) => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getCategories', {cache: 'default'});
    const categories = await res.json();

    
    const response = await fetch('https://portfolioapi.arafatrony.com/api/getPortfolios', {cache: 'default'});
    const portfolios = await response.json();

    return(
        <ClientSinglePortfolioSection name={props.name} type={props.type} categories={categories} portfolios={portfolios} />
    )

}

export default Portfoliosx;