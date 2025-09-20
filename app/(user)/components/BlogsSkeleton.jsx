const BlogsSkeleton = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Recent Posts</h2>
            <div className="row">

                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="placeholder-glow" style={{height: '200px', width: '100%'}}>
                            <span className="placeholder col-12" style={{ height: "100%" }}></span>
                        </div>
                        <div className="card-body">
                            <div className="placeholder-glow">
                                <span className="placeholder col-12"></span>
                            </div>
                            <div className="placeholder-glow mt-2">
                                <span className="placeholder col-10"></span>
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
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="placeholder-glow" style={{height: '200px', width: '100%'}}>
                            <span className="placeholder col-12" style={{ height: "100%" }}></span>
                        </div>
                        <div className="card-body">
                            <div className="placeholder-glow">
                                <span className="placeholder col-12"></span>
                            </div>
                            <div className="placeholder-glow mt-2">
                                <span className="placeholder col-10"></span>
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
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="placeholder-glow" style={{height: '200px', width: '100%'}}>
                            <span className="placeholder col-12" style={{ height: "100%" }}></span>
                        </div>
                        <div className="card-body">
                            <div className="placeholder-glow">
                                <span className="placeholder col-12"></span>
                            </div>
                            <div className="placeholder-glow mt-2">
                                <span className="placeholder col-10"></span>
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

    )
}

export default BlogsSkeleton;