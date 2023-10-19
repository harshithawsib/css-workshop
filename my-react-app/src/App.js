import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import your external stylesheet

function App() {
  return (
    <div id="app-container">
      <h1 id="app-title">CSS Workshop</h1>
      <div id="content-container">
        <h2>Header 2</h2>
        <p>
          This is a simple paragraph. You can add more content here to practice your CSS skills.
        </p>

        <ul id="custom-list-1">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>

        <ol id="custom-list-2">
          <li>Ordered item 1</li>
          <li>Ordered item 2</li>
          <li>Ordered item 3</li>
        </ol>

        <div id="button-container">
          <button id="button1" class="custom-button">
            Button 1
          </button>
          <button id="button2" class="custom-button">
            Button 2
          </button>
        </div>
      </div>
      <button class="custom-button custom-button-purple">
        <Link to="/layout">Click here to practice layouts</Link>
      </button>
      <button class="custom-button custom-button-purple">
        <Link to="/apptailwind">Click here to see the Tailwind CSS version</Link>
      </button>
    </div>
  );
}

export default App;
