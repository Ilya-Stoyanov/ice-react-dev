import images from "./constants/data"

const Application = () => {
  return (
    <section className="app">
      <div className="container">
        <div className="app-wrapper">
          <div className="app-preview">
            <figure className="app-img">
              <img src={images.appImg} alt="app-img"/>
            </figure>
          </div>
          <div className="app-content">
            <h2 className="inner-title app-title">Simple Way To Order Your Food</h2>
            <p className="app-text">Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.</p>
            <ul className="app-list">
              <li className="app-item click">Select Your Food</li>
              <li className="app-item cart">Add To Cart</li>
              <li className="app-item right">Order Your Food</li>
            </ul>
            <div className="app-block">
              <a href="" className="app-google"></a>
              <a href="" className="app-store"></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Application