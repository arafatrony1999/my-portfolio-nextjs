import Link from "next/link";

const PortfolioRight = async () => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getCategories', {cache: 'no-store'});
    const categories = await res.json();

    const res2 = await fetch('https://portfolioapi.arafatrony.com/api/getPortfolios', {cache: 'no-store'});
    const portfolios = await res2.json();

    return (
        <div className='w-100'>
            <input type="text" placeholder='Search...' className='w-100 mb-5 right-search-input' />

            <div className="bg-dark text-white p-3 py-2">Categories</div>

            <ul>
                {
                    categories.map((category) => {
                        return(
                            <li key={category.id} className=' list-unstyled py-2'>
                                <Link href={`/categories/${category.name}?type=${category.type}`}>{category.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>

            
            <div className="bg-dark text-white p-3 py-2 mb-4">Recent Projects</div>
            {
                portfolios.filter((obj, index, self) =>
                    index === self.findIndex((o) => o.name === obj.name) // Filter by 'id' property
                ).map((portfolio, index) => {
                    return(
                        <div className="service-card w-75 d-block m-auto my-2" key={index}>
                            <img className='img-fluid' src={portfolio.image} alt="" />
                            <Link href={`/project?id=${portfolio.id}`} className="service-details portfolio-details">
                                {portfolio.name}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PortfolioRight