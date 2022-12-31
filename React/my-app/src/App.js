import React from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css';

function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

export default function App() {
  return <Greeting name="Taylor" />;
} 
