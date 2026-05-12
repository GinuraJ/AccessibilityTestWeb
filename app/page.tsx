import "./globals.css";

export default function Home() {
  return (
    <main>
      <header className="header">
        <h1>Mega Deal Zone</h1>
        <p className="subtitle">
          Discover special offers in a calm and accessible experience.
        </p>
      </header>

      <nav className="nav" aria-label="Main navigation">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Deals</a>
        <a href="#">Trending</a>
        <a href="#">New Arrivals</a>
      </nav>

      <section className="banner" aria-labelledby="promo-heading">
        <h2 id="promo-heading">Featured Promotion</h2>
        <p>
          Explore limited-time discounts and curated product recommendations.
        </p>
      </section>

      <section className="announcement">
        <p>
          Promotions update regularly. Browse categories to find current
          discounts.
        </p>
      </section>

      <div className="container">
        <section className="noticeBox">
          <h2>Shopping Notice</h2>
          <p>
            Review featured deals and product updates in a distraction-free
            layout.
          </p>
        </section>

        <section className="contentSection">
          <h2>Welcome to Mega Deal Zone</h2>

          <p className="readableText">
            We designed this page to provide a cleaner and more predictable
            experience for all users. Content is spaced clearly, text is easier
            to read, and interactions are easier to understand. Users who
            prefer reduced stimulation can comfortably browse products without
            flashing banners, unexpected motion, or overwhelming visual noise.
          </p>

          <p className="readableText">
            Product information is grouped into simple sections with improved
            spacing, readable font sizes, and narrower reading widths to reduce
            eye strain and improve focus.
          </p>
        </section>

        <section className="interactionSection">
          <h2>Quick Actions</h2>

          <div className="buttonGroup">
            <button className="primaryButton">Browse Deals</button>
            <button className="secondaryButton">View Products</button>
            <button className="secondaryButton">Learn More</button>
          </div>
        </section>

        <section className="mediaSection">
          <h2>Featured Media</h2>

          <video className="media" controls>
            <source src="/sample-video.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>

          <audio controls>
            <source src="/sample-audio.mp3" type="audio/mpeg" />
            Your browser does not support audio playback.
          </audio>
        </section>

        <section className="productSection">
          <h2>Featured Products</h2>

          <div className="productGrid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article className="productCard" key={item}>
                <h3>Product {item}</h3>

                <p>
                  A featured product with improved spacing, readable text, and
                  accessible interaction patterns.
                </p>

                <button className="primaryButton">
                  View Product
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© 2026 Mega Deal Zone. All rights reserved.</p>
      </footer>
    </main>
  );
}