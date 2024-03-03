import images from "./constants/data"

const Detalis = () => {
  return (
    <section className="detalis" id="details">
      <div className="container">
        <div className="detalis-wrapper">
          <div className="detalis-content">
            <h2 className="detalis-title inner-title">Brown Sugar Oatmea</h2>
            <p className="detalis-text inner-text">Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</p>
            <a href="" className="detalis-link">See Details</a>
          </div>
          <figure className="detalis-img">
            <img src={images.aceDetails} alt="ice"/>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Detalis