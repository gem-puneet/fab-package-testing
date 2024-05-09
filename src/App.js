import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Landing Page</h1>
        <p>This is a responsive landing page created with React.</p>
      </header>
      <main>
  <section className="features">
    <h2>Features</h2>
    <ul>
      <li>Responsive design</li>
      <li>Easy to customize</li>
      <li>Fast loading times</li>
      <li>SEO friendly</li>
    </ul>
  </section>
  <section className="about">
    <h2>About Us</h2>
    <p>We are a team of passionate developers dedicated to creating high-quality web applications using modern technologies.</p>
  </section>
</main>
<footer>
  <div className="footer-content">
    <div className="footer-logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <div className="footer-links">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <ul>
        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
      </ul>
    </div>
  </div>
  <div className="footer-info">
    <p>&copy; 2024 Your Company. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default App;
