import "./globals.css";

export default function Home() {
  return (
    <main>
      <header className="flashHeader">
        MEGA DEAL ZONE!!!
      </header>

      <nav className="badNav">
        <a href="#">Home</a>
        <a href="#">Buy</a>
        <a href="#">Sale</a>
        <a href="#">Hot</a>
        <a href="#">Now</a>
      </nav>

      <section className="glowBanner">
        FLASH SALE FLASH SALE FLASH SALE - BUY NOW!!!
      </section>

      <section className="autoBanner">
        LIMITED TIME PROMOTION CHANGING FAST!!!
      </section>

      <div className="promoPopup">
        <h2>UNEXPECTED POPUP!!!</h2>
        <p>
          This popup appears immediately and interrupts the user with bright
          color, movement, tiny text, and distracting content.
        </p>
        <button className="smallButton">X</button>
      </div>

      <div className="container">
        <div className="shakeBox">
          WARNING! THIS BOX IS SHAKING CONTINUOUSLY!
        </div>

        <h1 className="allCaps">
          THIS IS A VERY LONG ALL CAPS HEADING DESIGNED TO BE HARD TO READ AND
          VISUALLY OVERWHELMING
        </h1>

        <p className="denseText">
          This is a deliberately dense paragraph created for testing the CalmUX
          neurodivergent accessibility rule set. The text is long, tightly
          packed, and difficult to scan. It does not use enough line spacing,
          and the container is far too wide for comfortable reading. Users with
          ADHD, dyslexia, autism, or sensory sensitivity may find this kind of
          content tiring because there are no clear breaks, no proper visual
          grouping, no calm structure, and no predictable reading rhythm. This
          paragraph continues with unnecessary details, repeated ideas, and
          overloaded information to create a test case where the system should
          detect dense text blocks and overly wide reading lines.
        </p>

        <p className="tinyText">
          This text is intentionally too small. It should trigger the small text
          rule because the font size is below the recommended readable size.
        </p>

        <section>
          <h2 className="neonTitle">Hidden and Small Interaction Test</h2>

          <div className="fakeButton">Go</div>
          <div className="fakeButton">Buy</div>
          <button className="smallButton">OK</button>
          <button className="smallButton">Yes</button>
        </section>

        <section>
          <h2 className="redTitle">Autoplay Media Test</h2>

          <video className="badMedia" autoPlay muted>
            <source src="/sample-video.mp4" type="video/mp4" />
          </video>

          <audio autoPlay>
            <source src="/sample-audio.mp3" type="audio/mpeg" />
          </audio>
        </section>

        <section className="productGrid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="productCard" key={item}>
              <h3>Product {item}</h3>
              <p>
                Bright animated product card with tiny text, neon color, poor
                spacing, and distracting movement.
              </p>
              <button className="smallButton">Buy</button>
            </div>
          ))}
        </section>
      </div>

      <footer className="badFooter">
        MEGA DEAL ZONE TEST PAGE - INTENTIONALLY BAD DESIGN FOR CALMUX TESTING
      </footer>
    </main>
  );
}