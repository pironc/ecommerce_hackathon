import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <div class="footer-btm py-4 ">
                <div class="container">
                <div class="row ">
                    <div class="col-lg-6">
                        <p class="copyright mb-0 ">© Copyright Reserved - eShop</p>
                    </div>
                    <div class="col-lg-6">
                        <ul class="list-inline mb-0 footer-btm-links text-lg-right mt-2 mt-lg-0">
                        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                        <li class="list-inline-item"><a href="#">Terms &amp; Conditions</a></li>
                        <li class="list-inline-item"><a href="#">Cookie Policy</a></li>
                        <li class="list-inline-item"><a href="#">Terms of Sale</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
   );
}

export default Footer;