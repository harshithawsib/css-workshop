import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">CSS Workshop</h1>
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Header 2</h2>
        <p>
          This is a simple paragraph. You can add more content here to practice your CSS skills.
        </p>

        <ul className="list-disc list-inside mt-4">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>

        <ol className="list-decimal list-inside mt-4">
          <li>Ordered item 1</li>
          <li>Ordered item 2</li>
          <li>Ordered item 3</li>
        </ol>

        <div className="mt-6 flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button 1
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Button 2
          </button>
        </div>
      </div>
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mt-4 rounded">
        <Link to="/layout">Click here to practice layouts</Link>
      </button>

    </div>
  );
}

export default App;
