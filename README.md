<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<header><h1>Agrowise Project</h1></header>
</head>
<body>
    <div class="container">
        <section class="section">
            <h2>Project Overview</h2>
            <p>Agrowise is a comprehensive platform designed to enhance agricultural practices using modern technology. This project leverages data analytics, machine learning, and advanced web technologies to provide valuable insights and recommendations for farmers.</p>
        </section>
        <section class="section">
            <h2>Features</h2>
            <ul>
                <li><strong>Data-Driven Recommendations:</strong> Offers actionable insights based on farm and crop data.</li>
                <li><strong>Condition Monitoring:</strong> Monitors and provides conditions for various agricultural parameters.</li>
                <li><strong>User-Friendly Interface:</strong> Intuitive web application for easy access to features.</li>
                <li><strong>Real-Time Data Processing:</strong> Utilizes Node.js and Flask for efficient data handling and processing.</li>
            </ul>
        </section>
        <section class="section">
            <h2>Installation</h2>
            <h3>Prerequisites</h3>
            <ul>
                <li><a href="https://nodejs.org/" target="_blank">Node.js</a> (>=14.x)</li>
                <li><a href="https://www.python.org/" target="_blank">Python</a> (>=3.7)</li>
                <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a> (optional, if your project uses MongoDB)</li>
            </ul>
            <h3>Clone the Repository</h3>
            <div class="code">
                <pre><code>git clone https://github.com/rajatjoe/Agrowise---proj.git
cd Agrowise---proj</code></pre>
            </div>
            <h3>Backend Setup</h3>
            <ol>
                <li>Navigate to the backend directory:
                    <div class="code">
                        <pre><code>cd backend</code></pre>
                    </div>
                </li>
                <li>Create a virtual environment and activate it:
                    <div class="code">
                        <pre><code>python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`</code></pre>
                    </div>
                </li>
                <li>Install the required Python packages:
                    <div class="code">
                        <pre><code>pip install -r requirements.txt</code></pre>
                    </div>
                </li>
                <li>Start the Flask server:
                    <div class="code">
                        <pre><code>flask run</code></pre>
                    </div>
                </li>
            </ol>
            <h3>Frontend Setup</h3>
            <ol>
                <li>Navigate to the frontend directory:
                    <div class="code">
                        <pre><code>cd frontend</code></pre>
                    </div>
                </li>
                <li>Install the required Node.js packages:
                    <div class="code">
                        <pre><code>npm install</code></pre>
                    </div>
                </li>
                <li>Start the React development server:
                    <div class="code">
                        <pre><code>npm start</code></pre>
                    </div>
                </li>
            </ol>
        </section>
        <section class="section">
            <h2>Usage</h2>
            <ol>
                <li>Access the frontend application at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser.</li>
                <li>Use the application to input farm and crop data.</li>
                <li>Receive data-driven recommendations and monitor conditions.</li>
            </ol>
        </section>
        <section class="section">
            <h2>API Endpoints</h2>
            <ul>
                <li><strong>POST /api/addFarm:</strong> Add farm details</li>
                <li><strong>POST /api/get_recommendations:</strong> Get recommendations based on farm data</li>
                <li><strong>POST /api/get_conditions:</strong> Get current conditions for specified parameters</li>
            </ul>
        </section>
        <section class="section">
            <h2>Contributing</h2>
            <p>We welcome contributions to the Agrowise project. If you would like to contribute, please follow these steps:</p>
            <ol>
                <li>Fork the repository.</li>
                <li>Create a new branch (<code>git checkout -b feature-branch</code>).</li>
                <li>Make your changes and commit them (<code>git commit -am 'Add new feature'</code>).</li>
                <li>Push the branch to your forked repository (<code>git push origin feature-branch</code>).</li>
                <li>Open a pull request with a clear description of the changes.</li>
            </ol>
        </section>
        <footer class="footer">
            <p>Thank you for checking out the Agrowise Project! 🙏🏻</p>
        </footer>
    </div>
</body>
</html>
