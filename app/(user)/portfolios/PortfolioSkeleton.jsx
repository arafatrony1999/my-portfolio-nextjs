export default function PortfolioSkeleton() {
    return (
        <>
            <div className="container py-5">
                
                <h2 className="text-center mb-4">Portfolio</h2>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="placeholder-glow" style={{ width: "100%", height: "200px"}}>
                                        <span className="placeholder col-12"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="placeholder-glow" style={{ width: "100%", height: "200px"}}>
                                        <span className="placeholder col-12"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="placeholder-glow" style={{ width: "100%", height: "200px"}}>
                                        <span className="placeholder col-12"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
