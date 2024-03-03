import images from "./constants/data"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <img src={images.logo} alt="logo"/>
        </div>
        <div className="footer-botom">
          <div className="footer-colom">
            <p className="footer-text">Some food has looked so awful that it's looked like something that the dog's brought home.</p>
            <span className="socal-title">Fllow Us</span>
            <div className="socal-icon">
                  <img src={images.facebook} alt="facebook"/>
                  <img src={images.twitter} alt="twitter"/>
                  <img src={images.instagram} alt="instagram"/>
                  <img src={images.linkedin} alt="linkedin"/>
            </div>
          </div>
          <div className="footer-colom">
            <span className="footer-title">Home</span>
            <ul className="footer-list">
              <li className="footer-item">Product<a href=""></a></li>
              <li className="footer-item">Blog<a href=""></a></li>
              <li className="footer-item">Pricing<a href=""></a></li>
              <li className="footer-item">Testimonials<a href=""></a></li>
              <li className="footer-item">Contact Us<a href=""></a></li>
            </ul>
          </div>
          <div className="footer-colom">
            <span className="footer-title">Delivery Information</span>
            <ul className="footer-list">
              <li className="footer-item">Privacy Policy<a href=""></a></li>
              <li className="footer-item">Terms & Condition<a href=""></a></li>
              <li className="footer-item">Search Terms<a href=""></a></li>
              <li className="footer-item">Order & Return<a href=""></a></li>
            </ul>
          </div>
          <div className="footer-colom footer-colom-form">
            <form className="footer-form">
              <legend>Newsletter</legend>
              <div className="footer-block">
                <input type="text" className="input" placeholder="Your Email" />
                <button className="footer-btn">Subscribe</button>
              </div>
            </form>
            <div className="footer-icon">
              <img src={images.paypal} alt="paypal" />
              <img src={images.mastercard} alt="mastercard" />
              <img src={images.visa} alt="visa" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer