const ServiceSkeleton = () => {
    const height = 180;
    return(
        <div className="container-fluid py-5" style={{ backgroundColor: '#f25c2a' }}>
            <h3 className="text-center text-white mb-5">
                <strong>SERVICES PROVIDED</strong>
            </h3>

            <div className="container">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card p-3 placeholder-glow">
                            <div className="placeholder col-12 mb-3" style={{ height: '180px' }}></div>
                            <span className="placeholder col-6 mx-auto mb-2"></span>
                            <span className="placeholder col-8 mx-auto"></span>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card p-3 placeholder-glow">
                            <div className="placeholder col-12 mb-3" style={{ height: '180px' }}></div>
                            <span className="placeholder col-7 mx-auto mb-2"></span>
                            <span className="placeholder col-5 mx-auto"></span>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-3 placeholder-glow">
                            <div className="placeholder col-12 mb-3" style={{ height: '180px' }}></div>
                            <span className="placeholder col-6 mx-auto mb-2"></span>
                            <span className="placeholder col-8 mx-auto"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServiceSkeleton;