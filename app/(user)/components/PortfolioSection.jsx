import BigText from './BigText'
import ClientPortfolioSection from './ClientPortfolioSection';
import ColoredBtn from './ColoredBtn'

const PortfolioSection = async () => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getCategories', {cache: 'default'});
    const categories = await res.json();

    
    const response = await fetch('https://portfolioapi.arafatrony.com/api/getPortfolios', {cache: 'default'});
    const portfolios = await response.json();

    return (
        <>
            <BigText big='PORTFOLIO' normal='RESENT' colored='WORKS' />
            
            <ClientPortfolioSection categories={categories} portfolios={portfolios} />

            <div className="text-center my-5 w-100">
                <ColoredBtn btnLink='projects' btnText='GO TO ALL'  />
            </div>
        </>
    )
}

export default PortfolioSection