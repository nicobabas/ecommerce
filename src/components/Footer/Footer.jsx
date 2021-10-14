import './Footer.css'


const Footer = () => (
   <footer>
       <div className="footer left">
           <div className="ligne1">
                <h1>TechnoLearn</h1>
                <ul>
                    <li><a href="#">Category X</a></li>
                    <li><a href="#">Category Y</a></li>
                    <li><a href="#">Category Z</a></li>
                </ul>
           </div>
           <div className="ligne2">
                <i class="fab fa-cc-mastercard"></i>
                <i class="fab fa-cc-visa"></i>
                <i class="fab fa-cc-amex"></i>
           </div>
       </div>
       <div className="footer right">
           <p>Stay in touch! Join our Newsletter.</p>
           <div className="form-group">
                <input type="email" placeholder="Enter Email"/>
                <input type="submit" value="Subscribe" />
           </div>
       </div>
    </footer> 
);

export default Footer;