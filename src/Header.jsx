import images from "./constants/data"
import { useState } from "react"

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({behavior: "smooth"})
    }
  return (
    <header className="header">
        <div className="header-fixed">
        <div className="container">
            <div className="header-wrapper">
                <a href="" className="header-logo">
                  <img src={images.logo} alt="logo"/>
                  </a>
                <nav className={isActive ? "nav active" : "nav"} >
                    <ul className="menu">
                        <li className="item">
                            Home
                        </li>
                        <li className="item" onClick={() => scrollToSection("hero")}>
                            Product
                        </li>
                        <li className="item" onClick={() => scrollToSection("delivery")}>
                            Delivery
                        </li>
                        <li className="item" onClick={() => scrollToSection("details")}>
                            Details
                        </li>
                        <li className="item" onClick={() => scrollToSection("products")}>
                            Products
                        </li>
                        <li className="item" onClick={() => scrollToSection("question")}>
                            Contact Us
                        </li>
                    </ul>
                    <a href="" className="header-link red-link">Buy Now</a>
                </nav>
                <div className={isActive ?  "burger active" : "burger"} onClick={handleToggle}></div>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header