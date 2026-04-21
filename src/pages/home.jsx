import React from 'react';
import services from '../data/services';
import experts from '../data/experts';
import StackingServices from '../components/stacking';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [showReviewForm, setShowReviewForm] = React.useState(false);
  const [reviews, setReviews] = React.useState([
    { name: "Anish Kumar", text: "Amazing service! The plumber arrived in 30 minutes.", stars: "⭐⭐⭐⭐⭐" },
    { name: "Priya Sharma", text: "Very professional cleaning. Highly recommend HomeArc.", stars: "⭐⭐⭐⭐⭐" },
    { name: "Rahul Singh", text: "Great experience with the electrician. Fair pricing.", stars: "⭐⭐⭐⭐" },
    { name: "Sneha Patel", text: "The painting work was flawless. Thank you!", stars: "⭐⭐⭐⭐⭐" },
    { name: "Amit Verma", text: "Fast and reliable AC repair service.", stars: "⭐⭐⭐⭐" },
    { name: "Neha Gupta", text: "Best platform for home maintenance.", stars: "⭐⭐⭐⭐⭐" },
    { name: "Vikram Das", text: "Efficient and friendly experts.", stars: "⭐⭐⭐⭐⭐" },
    { name: "Sonia Rao", text: "Transparency in pricing is what I liked most.", stars: "⭐⭐⭐⭐" },
  ]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name')?.toString().trim();
    const rating = Number(formData.get('rating'));
    const message = formData.get('message')?.toString().trim();
    if (!name || !rating || !message) return;
    const stars = '⭐'.repeat(rating);
    setReviews((prev) => [{ name, text: message, stars }, ...prev]);
    setShowReviewForm(false);
    e.target.reset();
  }


  return (
    <div className="home-page" style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content fade-in">
            <h1 style={{
              fontSize: '5rem',
              fontWeight: '900',
              lineHeight: '1.1',
              color: 'var(--secondary)',
              marginBottom: '1.5rem',
              letterSpacing: '-1px',
              textAlign: 'left',
              marginLeft: '4rem'
            }}>
              Your Trusted <br />
              <span style={{ color: 'var(--primary)' }}>Home Services</span> <br />
              Partner
            </h1>
            <p style={{ color: 'var(--secondary)', fontSize: '1.25rem', maxWidth: '550px', marginBottom: '3.5rem', lineHeight: '1.6', marginLeft: '4rem' }}>
              Welcome to HomeArc. Certified professionals at your door in under 2 hours. Fast, reliable, and backed by a 100% satisfaction guarantee.
            </p>
            <div className="hero-cta" style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
              <Link to="/services" className="btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '40px', fontSize: '1.1rem', fontWeight: 'bold', marginLeft: '4rem' }}>Our Services</Link>
              <Link to="/contact#enquire-now" className="btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '40px', fontSize: '1.1rem', fontWeight: 'bold', background: '#291d53' }}>
                Enquire Now
              </Link>
            </div>
            <div className="hero-stats" style={{
              display: 'flex',
              gap: '4rem',
              justifyContent: 'center',
              marginTop: '2rem',
              marginLeft: '30rem'     // Add this to indent 4rem from left
            }}>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.2rem' }}>50K+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>2K+</h3>
                <p>Certified Experts</p>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>4.9/5</h3>
                <p>⭐ Average Rating</p>
              </div>
            </div>
          </div>

          <div className="hero-visual fade-in">
            <div className="orbital-container">
              <div className="orbital-center" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'transparent', boxShadow: 'none' }}>
                <svg width="70" height="70" viewBox="0 0 24 24" fill="#1c1a3b" stroke="none" className="orbital-center-icon">
                  <path d="M12 2L2 10.6h3V22h5v-6h4v6h5V10.6h3L12 2z" />
                </svg>
              </div>
              <div className="orbit-rings" aria-hidden="true">
                <span className="orbit-ring ring-1"></span>
                <span className="orbit-ring ring-2"></span>
              </div>
              <div className="orbit">
                {[
                  { id: 3, name: 'AC', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffd13b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L12 22M6 6L18 18M18 6L6 18M2 12L22 12" /></svg>, color: '#ffd13b' },
                  { id: 1, name: 'Plumbing', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#2b70e4"><path d="M14 10l-4-4-6 6c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0l6-6-4-4zm8-6c-1.5-1.5-4-1.5-5.5 0L14 6l4 4 2.5-2.5c1.5-1.5 1.5-4 0-5.5z" stroke="none" /></svg>, color: '#2b70e4' },
                  { id: 5, name: 'Painting', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#d141e0"><path d="M19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 13h4v8H5v-8z" stroke="none" /></svg>, color: '#d141e0' },
                  { id: 2, name: 'Electrical', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#00d27f"><path d="M11 21L11 13 7 13 13 3 13 11 17 11 11 21z" stroke="none" /></svg>, color: '#00d27f' },
                  { id: 4, name: 'Carpentry', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffd13b"><path d="M21 9c0-1.1-.9-2-2-2h-3L14 5c-1.1-1.1-3-1.1-4.1 0l-1.4 1.4c-1.1 1.1-1.1 3 0 4.1L10 12v3c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V9zM2 20v2h2l9-9-2-2-9 9z" stroke="none" /></svg>, color: '#ffd13b' },
                  { id: 6, name: 'Cleaning', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#2b70e4"><path d="M19.5 5.5v-2h-3v2h-1v-4h-3v4h-1v-5h-3v5h-1v-6h-3v6h-1v8l4 6v8h4v-8l4-6v-8h-1z" stroke="none" /></svg>, color: '#2b70e4' },
                  { id: 7, name: 'Renovation', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#d141e0"><path d="M12 2L2 12h3v8h14v-8h3L12 2zM12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM9 16h6v4H9v-4z" stroke="none" /></svg>, color: '#d141e0' },
                  { id: 8, name: 'Pest', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#00d27f"><path d="M12 2c-2.21 0-4 1.79-4 4 0 1.5.85 2.79 2.11 3.47l-1.53 3.53C7.24 13.06 6 14.39 6 16v4h2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4h2v-4c0-1.61-1.24-2.94-2.58-3.04l-1.53-3.53C15.15 8.79 16 7.5 16 6c0-2.21-1.79-4-4-4zm-1 2h2v4h-2V4zm-5 6L4 8v2l2 2v-2zm12 0l2-2v-2l-2 2v2zm-6 4h2v2h-2v-2z" stroke="none" /></svg>, color: '#00d27f' }
                ].map((service, index) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className={`orbital-item item-${index + 1} clockwise`}
                    aria-label={service.name}
                  >
                    <div className="orbital-item-inner">
                      <div className="orbital-item-content">
                        {service.icon}
                        <span style={{ color: service.color }}>{service.name}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Summary Section */}
      <section className="about-us-home section-padding">
        <div className="container">
          <div className="about-us-center">
            <h2 className="section-title">Why Choose <span style={{ color: 'var(--primary)' }}>Home</span><span style={{ color: 'var(--secondary)' }}>Arc</span></h2>
            <p className="about-description">
              We at <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Home</span><span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Arc</span> give best services to our customers and help them with their House renovations, painting, gardening, cleaning etc.
              We have team of certified professionals who are both experienced and skilled to help us to get best reviews from our customers.
            </p>

            <ul className="about-features" aria-label="HomeArc benefits">
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">24/7 Priority Support for all members</span>
              </li>
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">High quality service with affordable cost.</span>
              </li>
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">High experienced professional</span>
              </li>
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">Instant Enquiring with Real-time Tracking</span>
              </li>
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">Transparent Pricing with No Hidden Costs</span>
              </li>
              <li className="about-feature">
                <span className="about-feature-icon" aria-hidden="true">✓</span>
                <span className="about-feature-text">Reliable and On-Time Service Guaranteed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <StackingServices services={services} />

      {/* Experts Marquee Section */}
      <section className="experts-section">
        <div className="container">
          <h2 className="section-title">Our Certified Experts</h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...experts, ...experts].map((expert, index) => (
              <Link key={`${expert.id}-${index}`} to={`/experts/${expert.id}`} className="expert-card-mini">
                <div className="expert-avatar">
                  <img className="expert-avatar-img" src={expert.image} alt={expert.name} />
                </div>
                <h4 className="expert-name">{expert.name}</h4>
                <p className="expert-role">{expert.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-carousel-head">
            <div className="reviews-carousel-head-group">
              <h2 className="section-title">What Our Clients Say</h2>
              <div className="review-stat-circle">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
            {!showReviewForm && (
              <button className="btn-secondary add-review-btn" onClick={() => setShowReviewForm(true)}>
                Add a Review
              </button>
            )}
          </div>

          <div className="marquee-container" style={{ margin: '0 0 3rem' }}>
            <div className="marquee-content" style={{ alignItems: 'stretch' }}>
              {[...reviews, ...reviews].map((review, index) => (
                <div key={`review-${index}`} className="review-card-fixed" style={{ width: '380px', margin: '0 1rem', flexShrink: 0, whiteSpace: 'normal', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                  <div className="review-stars">{review.stars}</div>
                  <p className="review-text" style={{ flexGrow: 1 }}>"{review.text}"</p>
                  <p className="review-author" style={{ marginTop: 'auto' }}>- {review.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add Review Form */}
          {showReviewForm && (
            <div className="review-modal-backdrop" onClick={() => setShowReviewForm(false)}>
              <div className="add-review-section modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setShowReviewForm(false)}
                  aria-label="Close review form"
                >
                  ×
                </button>
                <h3 className="add-review-title">Share Your Experience</h3>
                <form onSubmit={handleReviewSubmit}>
                  <div className="form-row">
                    <input name="name" type="text" placeholder="Your Name" required className="form-input" />
                    <select name="rating" className="form-input" required>
                      <option value="">Rating</option>
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                    </select>
                  </div>
                  <textarea name="message" placeholder="Your Review" required className="form-input add-review-textarea"></textarea>
                  <button type="submit" className="btn-primary add-review-submit">Submit Review</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;