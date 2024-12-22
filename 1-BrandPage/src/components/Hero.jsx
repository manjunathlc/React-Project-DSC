const Hero = () => {
  return (
    <main className="container hero-section">
      <div>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="button-section">
          <button className="btn btns-sec-sty">Shop now</button>
          <button className="btn category-btn">Category</button>
        </div>
        <div>
          <h6>Also Available On</h6>
          <div className="flip-amazon-img">
            <img src="flipkart.png" alt="Flipkart" />
            <img src="amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="shoe-section">
        <img src="shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Hero;
