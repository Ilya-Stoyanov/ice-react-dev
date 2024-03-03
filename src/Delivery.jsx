import images from "./constants/data"

const Delivery = () => {
  return (
    <section className="delivery" id="delivery">
      <div className="container">
        <div className="delivery-wrapper">
          <div className="delivery-block">
            <figure>
              <img src={images.car} alt="car"/>
            </figure>
            <span className="delivery-title">Free Shipping</span>
            <p className="delivery-text">Last Chance! Free shipping on all orders ends today.</p>
          </div>
          <div className="delivery-block">
            <figure>
              <img src={images.pack} alt="pack"/>
            </figure>
            <span className="delivery-title">Quick Packaging</span>
            <p className="delivery-text">Last Chance! Free shipping on all orders ends today.</p>
          </div>
          <div className="delivery-block">
            <figure>
              <img src={images.cash} alt="cash"/>
            </figure>
            <span className="delivery-title">100% Money Back</span>
            <p className="delivery-text">Last Chance! Free shipping on all orders ends today.</p>
          </div>
          <div className="delivery-block">
            <figure>
              <img src={images.fastDelivery} alt="fast-delivery"/>
            </figure>
            <span className="delivery-title">Fast Delivery</span>
            <p className="delivery-text">Last Chance! Free shipping on all orders ends today.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery