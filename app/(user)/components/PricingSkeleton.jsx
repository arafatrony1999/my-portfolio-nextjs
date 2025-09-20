const PricingSkeleton = () => {
    return (
        <div className="container my-5">
            <div className="row g-4">
                
                <div className="col-md-4">
                    <div className="card text-center p-3 shadow-sm">
                        <div className="card-body">
                            <div className="placeholder-glow mb-3">
                                <div className="placeholder rounded-circle bg-secondary" style={{ width: "80px", height: "80px", margin: "0 auto" }}></div>
                            </div>
                            
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-8"></span>
                            </h5>
                            
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-12"></span>
                                <span className="placeholder col-10"></span>
                                <span className="placeholder col-6"></span>
                            </p>
                            
                            <h4 className="placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h4>
                            
                            <div className="d-grid">
                                <button className="btn btn-outline-primary disabled placeholder col-8"></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center p-3 shadow-sm">
                        <div className="card-body">
                            <div className="placeholder-glow mb-3">
                                <div className="placeholder rounded-circle bg-secondary" style={{ width: "80px", height: "80px", margin: "0 auto" }}></div>
                            </div>
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-11"></span>
                                <span className="placeholder col-9"></span>
                                <span className="placeholder col-5"></span>
                            </p>
                            <h4 className="placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h4>
                            <div className="d-grid">
                                <button className="btn btn-outline-primary disabled placeholder col-8"></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center p-3 shadow-sm">
                        <div className="card-body">
                            <div className="placeholder-glow mb-3">
                                <div className="placeholder rounded-circle bg-secondary" style={{ width: "80px", height: "80px", margin: "0 auto" }}></div>
                            </div>
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-7"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-12"></span>
                                <span className="placeholder col-10"></span>
                                <span className="placeholder col-8"></span>
                            </p>
                            <h4 className="placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h4>
                            <div className="d-grid">
                                <button className="btn btn-outline-primary disabled placeholder col-8"></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PricingSkeleton;
