import images from "./constants/data"

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="hero-subtitle">Sweet fun, full of milk.</span>
            <h1 className="hero-title">Feel inside cold with our delicious <span>ice-cream.</span></h1>
            <p className="hero-text">Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.</p>
            <a href="" className="hero-link red-link">Buy Now</a>
          </div>
          <figure className="hero-img">
            <img src={images.heroImg} alt="ice"/>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero