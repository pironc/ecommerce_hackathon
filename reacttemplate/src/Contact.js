import ContactForm from './ContactForm.js'

function Contact() {
    return (
        <div className="about-container">
            <section class="page-header">
                <div class="overly"></div>
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                    <div class="content text-center">
                        <h1 class="mb-3">Contact</h1>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            <ContactForm/>
        </div>
    )
}
export default Contact;