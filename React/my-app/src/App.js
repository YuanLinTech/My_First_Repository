import { createElement } from 'react';

function Greeting({ name }) {
    return createElement(
        'h1',
        { className: 'greeting' },
        'Hello ',
        createElement('i', null, name),
        '. Welcome!'
    );
}

export default function Welcome() {
    return createElement(
        Greeting,
        { name: 'Taylor' }
    );
}

/* import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App; */

