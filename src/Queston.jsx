import React from 'react'

const Queston = () => {
  return (
    <section className="queston" id='question'>
      <div className="container">
        <h2 className="inner-title queston-title">Have Question in Mind? Let us help you</h2>
        <form className="queston-form">
          <input type="email" placeholder="Enter your question"/>
            <button className="queston-btn">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Queston