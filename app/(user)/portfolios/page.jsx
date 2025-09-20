import { Suspense } from "react";
import BigText from "../components/BigText";
import HireMeAdd from "../components/HireMeAdd";
import Portfoliosx from "./Portfolios";
import PortfolioSkeleton from "./PortfolioSkeleton";


const Portfolios = async (props) => {
    return (
        <div className='container min-height'>
            {!props.categoryPage && <HireMeAdd />}
            <BigText big='PORTFOLIO' normal='RESENT' colored='WORKS' />

            <Suspense fallback={<PortfolioSkeleton />}>
                <Portfoliosx name={props.name} type={props.type} />
            </Suspense>
        </div>
    )
}

export default Portfolios;
