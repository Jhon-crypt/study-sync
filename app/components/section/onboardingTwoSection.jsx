export default function OnboardingTwoSection() {

    return (

        <>


            <div className="container-fluid">
                <div className="row">
                    {/* First column takes up half of the screen */}
                    <div className="col-md-4 m-0 p-0">
                        <img src="/onboarding1.png" className="img-fluid h-51 w-100" alt="Half screen image" />
                    </div>
                    {/* Second column takes up the other half of the screen */}
                    <div className="col-md-6 mt-1">
                        <div className="text-center">
                            <h4 className="" style={{ fontFamily: "Montserrat-Black", fontSize: "23px" }}>
                                <span className="me-2">Curate</span>
                                <span style={{ color: "#E84D88" }}>A Study Plan</span>
                            </h4>
                            <p className="px-4" style={{ fontFamily: "Montserrat-SemiBold" }}>
                                Build your study RoadmapIn Real-Time
                            </p>

                            <img src="frame1.png" />

                            <div class="d-flex justify-content-between mt-4 pt-4">
                                <button className="btn ps-4" style={{ fontFamily: "Montserrat-Bold", color: "#CD598F" }}>
                                    Skip
                                </button>

                                <button className="btn border-0 text-white px-5" style={{ fontFamily: "Montserrat-Bold", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                                    Next
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}