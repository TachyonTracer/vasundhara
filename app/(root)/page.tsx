import Image from "next/image";

export default function Home() {
  

  return (
    <>
    <header>
    <div className="logo">
        <img src="logo.png" alt="Green Score Logo" />
    </div>
    <nav>
        <a href="#" >Home</a>
        <a href="#">Score Generator</a>
        <a href="#" >Dashboard</a>
    </nav>
    <div className="user-profile">
        <img src="profile.png" alt="User Avatar" id="userAvatar" />
        <a href="sign-in" id="loginBtn">Login</a>
    </div>
</header>

<div id="home" className="page active">
    <div className="home-container">
        <div className="home-text">
            <h1>What is Vasundhara?</h1>
            <p>
            <button className="cta-button" >TAKE ACTION</button><br/><br/>
                We help you know your green score.<br/> A Green Score measures how environmentally friendly a business is based on energy usage,<br/> waste management, and sustainable practices.
            </p>
        </div>
        <div className="home-image">
            <img src="home_page_image.png" alt="Sustainability Image"/>
        </div>
    </div>
</div>


<section id="dashboard" className="page">
    <div className="dashboard-container">
        <h1>User Dashboard</h1>
        
        
        <div className="user-info">
            <img src="profile.png" alt="User Avatar" className="user-avatar"/>
            <div className="user-details">
                <h2 id="username">John Doe</h2>
                <p id="business">Green Tech Solutions</p>
            </div>
        </div>

        <div className="score-gauge">
            <h2>Current Green Score</h2>
            <canvas id="scoreGauge"></canvas>
        </div>

        <div className="scores-container">
            <h2>Previous Green Scores</h2>
            <ul id="score-list">
            </ul>
        </div>
    </div>
</section>

<section id="score-generator" className="page">
    <h1>Generate Green Score</h1>
    <form id="scoreForm">
        <label htmlFor="vehicles">Number of Vehicles:</label>
        <input type="number" id="vehicles" name="vehicles" min="0" step="0.01" required /><br/>

        <label htmlFor="power">Power Consumption (kWh):</label>
        <input type="number" id="power" name="power" min="0" step="0.01" required /><br/>

        <label htmlFor="waste">Waste Generated (kg):</label>
        <input type="number" id="waste" name="waste" min="0" step="0.01" required /><br/>

        <label htmlFor="recycled">Recycled Waste (kg):</label>
        <input type="number" id="recycled" name="recycled" min="0" step="0.01" required /><br/>

        <label htmlFor="employees">Number of Employees:</label>
        <input type="number" id="employees" name="employees" min="1" required /><br />

        <button type="submit">Generate Green Score</button>
    </form>
    <div id="scoreAnimation" className="score-animation">
        <div className="loading-spinner"></div>
        <p>Calculating your Green Score...</p>
    </div>
    <div id="scoreResult" className="score-result">
        <h2>Your Green Score</h2>
        <div id="greenScoreDisplay"></div>
    </div>
</section>




<footer>
    <div className="footer-content">
        <div className="about-us">
            <h3>About Us</h3>
            <p>We are dedicated to promoting sustainable practices and helping businesses reduce their environmental impact.</p>
        </div>
        <div className="contact-info">
            <h3>Contact Us</h3>
            <p><i className="fas fa-envelope"></i> Email: info@greenscorewebsite.com</p>
            <p><i className="fas fa-phone"></i> Phone: (555) 123-4567</p>
        </div>
    </div>
    <div className="copyright">
        <p>&copy; 2024 Green Score Website. All rights reserved.</p>
    </div>
</footer>
</>

  );
}
