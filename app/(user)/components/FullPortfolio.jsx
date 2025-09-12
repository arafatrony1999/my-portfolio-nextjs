import React from 'react'

const FullPortfolio = (props) => {
    if(props.portfolio){
        return (
            <div className='w-100'>
                <h1>{props.portfolio.name}</h1>

                <img className='img-fluid w-100' src={props.portfolio.image} alt="" />
    
                <div className='full-blog w-100 my-5'>
                    <div className="p-3 my-3 bg-secondary bold w-auto h4">Developed by <span className='text-danger font-weight-bolder'>Arafat Rony</span></div>
                    <div className='py-3' dangerouslySetInnerHTML={{__html: props.portfolio.description }}></div>
                </div>

                <div className="d-flex">
                    <a href={props.portfolio.link} target="_blank" rel="noopener noreferrer" className='px-3 py-2 btn-outline-black'>Visit Website</a>
                    <a href={props.portfolio.github} target="_blank" rel="noopener noreferrer" className='px-3 py-2 btn-outline-black' style={{marginLeft: '15px'}}>View in Github</a>
                </div>
            </div>
        )
    }else{
        return <h1>Loading...</h1>
    }
}

export default FullPortfolio