const SkillSkeleton = () => {
    return(
        <div class="container text-center my-5">
            <h3><strong>MY <span class="text-danger">SKILLS</span></strong></h3>
            
            <div class="row mt-4">
                <div class="col-md-6 mb-4">
                    <div class="d-flex justify-content-between mb-1">
                        <span class="placeholder col-3"></span>
                        <span class="placeholder col-1"></span>
                    </div>
                    <div class="progress placeholder-glow" style={{ height: "20px" }}>
                        <div class="progress-bar placeholder col-12"></div>
                    </div>
                </div>

                <div class="col-md-6 mb-4">
                    <div class="d-flex justify-content-between mb-1">
                        <span class="placeholder col-3"></span>
                        <span class="placeholder col-1"></span>
                    </div>
                    <div class="progress placeholder-glow" style={{ height: "20px" }}>
                        <div class="progress-bar placeholder col-12"></div>
                    </div>
                </div>

                <div class="col-md-6 mb-4">
                    <div class="d-flex justify-content-between mb-1">
                        <span class="placeholder col-3"></span>
                        <span class="placeholder col-1"></span>
                    </div>
                    <div class="progress placeholder-glow" style={{ height: "20px" }}>
                        <div class="progress-bar placeholder col-12"></div>
                    </div>
                </div>

                <div class="col-md-6 mb-4">
                    <div class="d-flex justify-content-between mb-1">
                        <span class="placeholder col-3"></span>
                        <span class="placeholder col-1"></span>
                    </div>
                    <div class="progress placeholder-glow" style={{ height: "20px" }}>
                        <div class="progress-bar placeholder col-12"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillSkeleton;