import React, {useState, useEffect} from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 400 ? setShowTopBtn(true) : setShowTopBtn(false)
        })
    }, [])

  return (
    <>
        {showTopBtn && 
            <MdKeyboardDoubleArrowUp className='btn-up' onClick={goToTop}/>
        }
    </>
  )
}

export default ScrollToTop