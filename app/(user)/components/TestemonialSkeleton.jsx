const TestemonialSkeleton = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Testimonial</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="placeholder-glow" style={{ width: "80px", height: "80px", borderRadius: "50%" }}>
                                    <span className="placeholder col-12 rounded-circle"></span>
                                </div>
                                <div className="ms-3">
                                    <div className="placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </div>
                                    <div className="placeholder-glow mt-2">
                                        <span className="placeholder col-4"></span>
                                    </div>
                                    <div className="placeholder-glow mt-2">
                                        <span className="placeholder col-5"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="placeholder-glow">
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-10 mt-2"></span>
                                    <span className="placeholder col-8 mt-2"></span>
                                </div>
                                <div className="mt-3">
                                    <div className="placeholder-glow">
                                        <span className="placeholder col-4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TestemonialSkeleton;