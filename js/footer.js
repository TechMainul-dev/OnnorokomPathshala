class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <div class="container">
    
            <div class="row footerArea">
    
                <div class="col-6 col-md-3 contactDetails">
                    <h2>Category</h2>
                    <ul>
                        <li><a href="#">অষ্টম শ্রেণী
                            </a></li>
                        <li><a href="#">নবম-দশম শ্রেণী
                            </a></li>
                        <li><a href="#">একাদশ-দ্বাদশ শ্রেণী
                            </a></li>
                        <li><a href="#">ভার্সিটি 'ক'
                            </a></li>
                        <li><a href="#">মেডিকেল</a></li>
                        <li><a href="#">ইঞ্জিনিয়ারিং </a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-3 right contactDetails">
                    <h2>Site map</h2>
                    <ul>
                        <li><a href="#">Blog
                            </a></li>
                        <li><a href="#">Work With Us
                            </a></li>
                        <li><a href="#">একাদশ-দ্বাদশ শ্রেণী
                            </a></li>
                        <li><a href="#">About Us
                            </a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-3 contactDetails">
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="#">39; A&#8228;R&#8228;A&#8228; Bhaban
                            </a></li>
                        <li><a href="#">Kaji Najrul Islam Avenue
                            </a></li>
                        <li><a href="#">Kawran Bazar, Dhaka - 1215
                            </a></li>
                        <li><a href="#">01707******</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-3 right contactDetails">
                    <div class="footerLogo">
                        <img src="./Logo/logo_medium.png" alt="logo/png">
                    </div>
                    <div class="socialIcon">
                        <a href="http://fb.com" target="_blank">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="http://https://www.youtube.com/watch?v=guKScX8YXLU" target="_blank">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a href="http://instagram.com" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="http://twitter.com" target="_blank">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
    
            </div>
    
    
            <div class="row copyright">
                <h3>Terms | Privacy</h3>
                <h4>Copyright &copy; 2022, OnnoRokom Pathshala</h4>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define(`my-footer`, MyFooter)

