function About() {
    return (
        <div className="about-container">
            <section class="page-header">
                <div class="overly"></div>
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                    <div class="content text-center">
                        <h1 class="mb-3">About us</h1>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <div className="container mt-5">
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Our description
                    </label>
                </div>
            </div>
        </div>
    )
}
export default About;