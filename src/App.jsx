import Application from "./Application"
import Delivery from "./Delivery"
import Detalis from "./Detalis"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import Product from "./Product"
import Queston from "./Queston"
import ScrollToTop from "./ScrollToTop"


function App() {

  return <>
   <Header/>
   <main>
    <Hero/>
    <Delivery/>
    <Detalis/>
    <Product/>
    <Application/>
    <Queston/>
   </main>
   <Footer/>
   <ScrollToTop/>
  </>
}

export default App
