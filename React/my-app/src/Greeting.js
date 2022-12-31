import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting({ name }) {
    return React.createElement(
        'h1',
        { className: 'greeting' },
        'Hello ',
        createElement('i', null, name),
        '. Welcome!'
    );
}

export default function App() {
    return React.createElement(
        Greeting,
        { name: 'Taylor' }
    );
}

/* And here is the same example written using JSX:

function Greeting({ name }) {
    return (
        <h1 className="greeting">
            Hello <i>{name}</i>. Welcome!
        </h1>
    );
}

export default function App() {
    return <Greeting name="Taylor" />;
} */