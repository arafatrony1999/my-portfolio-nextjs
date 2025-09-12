"use client"

import { useEffect, useState} from 'react'
import Link from 'next/link';

export default function ClientPortfolioSection(props) {

    const [categories, setCategories] = useState([]);
    const [all_portfolios, setAllPortfolios] = useState([]);
    const [single_category, setSingleCategory] = useState([]);

    const setFilteredCategory = function(id){
        if(id === 0){
            setSingleCategory([]);
        }else{
            setSingleCategory(categories.filter((category) => {
                return category.id === id
            }));
        }
    }

    useEffect(() => {
        setCategories(props.categories);

        const uniqueArray = props.portfolios.filter((obj, index, self) =>
            index === self.findIndex((t) => t.name === obj.name)
        );
        setAllPortfolios(uniqueArray);
    }, [])

    return (
        <>
            <div className='container skills-section my-5'>

                <div className="portfolio-links d-flex mx-auto my-3 flex-wrap">
                    <button className={single_category.length === 0 ? 'text-danger' : undefined} onClick={() => setFilteredCategory(0)}>All</button>
                    {
                        categories.filter((category) => {
                            return category.type === 'website'
                        }).map((category, index) => {
                            return(
                                <button className={single_category.length !== 0 && single_category[0].id === category.id ? 'text-danger' : undefined} key={index} onClick={() => setFilteredCategory(category.id)}>{category.name}</button>
                            )
                        })
                    }
                </div>

                
                <div className="services-cards w-100 d-flex justify-content-between flex-wrap">
                    {
                        single_category.length !== 0 ?
                        single_category[0].portfolios.length !== 0 ?
                        single_category[0].portfolios.slice(0, 6).map((portfolio, index) => {
                            return(
                                <div className="service-card" key={index}>
                                    <img className='img-fluid' src={portfolio.image} alt="" />
                                    <Link href={`/project?id=${portfolio.id}`} className="service-details portfolio-details">
                                        {portfolio.name}
                                    </Link>
                                </div>
                            )
                        }) : <h3 className='w-100 text-center text-danger'>No project available for this category!</h3> : all_portfolios.slice(0, 6).map((portfolio, index) => {
                            return(
                                <div className="service-card" key={index}>
                                    <img className='img-fluid' src={portfolio.image} alt="" />
                                    <Link href={`/project?id=${portfolio.id}`} className="service-details portfolio-details">
                                        {portfolio.name}
                                    </Link>
                                </div>
                            )
                        })
                    }

                    <div className="service-card"></div>
                    <div className="service-card"></div>

                </div>
            </div>
        </>
    )
}
