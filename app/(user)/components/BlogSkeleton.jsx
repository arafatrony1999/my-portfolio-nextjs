const BlogSkeleton = () => {
    return(
        <>
            <div className="container mt-5">
                <div className="row mb-3">
                    <div className="col-2">
                        <div className="bg-light rounded-circle skeleton-icon" style={{ width: '60px', height: '60px' }}></div>
                    </div>
                    <div className="col-10">
                        <div className="bg-light rounded skeleton-title" style={{ width: '80%', height: '30px' }}></div>
                        <div className="bg-light rounded skeleton-text mt-2" style={{ width: '50%', height: '20px' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="bg-light rounded skeleton-text mb-3" style={{ height: '20px' }}></div>
                        <div className="bg-light rounded skeleton-text mb-3" style={{ height: '20px' }}></div>
                        <div className="bg-light rounded skeleton-text mb-3" style={{ height: '20px' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="bg-light rounded mb-3 skeleton-image" style={{ height: '250px' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-start mb-3">
                            <div className="bg-light rounded-circle skeleton-icon" style={{ width: '30px', height: '30px' }}></div>
                            <div className="bg-light rounded-circle skeleton-icon mx-3" style={{ width: '30px', height: '30px' }}></div>
                            <div className="bg-light rounded-circle skeleton-icon" style={{ width: '30px', height: '30px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSkeleton;