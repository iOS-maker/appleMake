import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>AppleMake Service Center</h1>
      </header>
      <section className="hero">
        <h2>Repair &amp; Care for your Apple devices</h2>
        <p>Professional services for iPhone, iPad, Mac and more.</p>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Diagnostic</h3>
          <p>We quickly determine what your device needs.</p>
        </div>
        <div className="feature">
          <h3>Fast Repair</h3>
          <p>High‑quality parts and reliable service.</p>
        </div>
        <div className="feature">
          <h3>Warranty</h3>
          <p>All repairs are covered by our guarantee.</p>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@applemake.example</p>
        <p>Phone: +1 555-123-4567</p>
      </section>
      <footer className="footer">
        <p>&copy; 2025 AppleMake</p>
      </footer>
    </div>
  )
}

export default App
